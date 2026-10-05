import { BadRequestException, Injectable } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';

import { Client, handle_file } from '@gradio/client';

import { writeFile, unlink } from 'fs/promises';

import { join } from 'path';

import { randomUUID } from 'crypto';

@Injectable()
export class TryOnService {
  constructor(private readonly configService: ConfigService) {}

  // =========================================================
  // GENERATE VIRTUAL TRY-ON
  // =========================================================

  async generateTryOn(
    personBuffer: Buffer,
    garmentUrl: string,
    garmentCategory: string = 'Frock',
  ): Promise<string> {
    // -------------------------------------------------------
    // Validate person image
    // -------------------------------------------------------

    if (!personBuffer || personBuffer.length === 0) {
      throw new BadRequestException('Person image is required');
    }

    // -------------------------------------------------------
    // Validate garment URL
    // -------------------------------------------------------

    if (!garmentUrl?.trim()) {
      throw new BadRequestException('Garment image is required');
    }

    // -------------------------------------------------------
    // Normalize category
    // -------------------------------------------------------

    const category = this.normalizeCategory(garmentCategory);

    console.log('========================================');
    console.log('MAAD FASHIONS - AI TRY ON');
    console.log('Original category:', garmentCategory);
    console.log('FASHN category:', category);
    console.log('Garment URL:', garmentUrl);
    console.log('========================================');

    // -------------------------------------------------------
    // Hugging Face token
    // -------------------------------------------------------

    const hfToken = this.configService.get<string>('HUGGINGFACE_TOKEN');

    if (!hfToken) {
      console.error('HUGGINGFACE_TOKEN is missing from backend .env');

      throw new BadRequestException('Hugging Face token is not configured.');
    }

    console.log('Hugging Face token found.');

    // -------------------------------------------------------
    // Temporary files
    // -------------------------------------------------------

    const personFile = join(process.cwd(), `tryon-person-${randomUUID()}.jpg`);

    const garmentFile = join(
      process.cwd(),
      `tryon-garment-${randomUUID()}.jpg`,
    );

    try {
      // =====================================================
      // 1. SAVE PERSON IMAGE
      // =====================================================

      await writeFile(personFile, personBuffer);

      console.log('Temporary person image created.');

      // =====================================================
      // 2. DOWNLOAD GARMENT FROM CLOUDINARY
      // =====================================================

      console.log('Downloading garment image...');

      const garmentResponse = await fetch(garmentUrl);

      if (!garmentResponse.ok) {
        throw new Error(
          `Unable to download garment image. HTTP ${garmentResponse.status}`,
        );
      }

      const garmentArrayBuffer = await garmentResponse.arrayBuffer();

      const garmentBuffer = Buffer.from(garmentArrayBuffer);

      if (!garmentBuffer || garmentBuffer.length === 0) {
        throw new Error('Downloaded garment image is empty.');
      }

      await writeFile(garmentFile, garmentBuffer);

      console.log('Temporary garment image created.');

      console.log('Garment image size:', garmentBuffer.length, 'bytes');

      // =====================================================
      // 3. CONNECT TO FASHN
      // =====================================================

      console.log('Connecting to FASHN AI...');

      const app = await Client.connect('fashn-ai/fashn-vton-1.5', {
        hf_token: hfToken,
      });

      console.log('Connected to FASHN AI.');

      // =====================================================
      // 4. GENERATE TRY-ON
      // =====================================================

      console.log('Generating virtual try-on...');

      console.log('FASHN INPUT:', {
        personFile,
        garmentFile,
        category,
      });

      const result = await app.predict('/try_on', [
        handle_file(personFile),
        handle_file(garmentFile),
        category,
        'flat-lay',
        50,
        1.5,
        42,
        true,
      ]);

      // =====================================================
      // 5. LOG RESPONSE
      // =====================================================

      console.log('========================================');
      console.log('FASHN RESPONSE RECEIVED');
      console.log('========================================');

      console.dir(result, {
        depth: 10,
      });

      // =====================================================
      // 6. GET RESPONSE DATA
      // =====================================================

      const data: any = result?.data;

      if (!data) {
        throw new Error('FASHN returned no data.');
      }

      console.log('FASHN DATA:', data);

      // =====================================================
      // 7. EXTRACT FIRST RESULT
      // =====================================================

      let output: any = Array.isArray(data) ? data[0] : data;

      // Handle nested arrays
      if (Array.isArray(output)) {
        output = output[0];
      }

      if (!output) {
        throw new Error('FASHN did not return a try-on image.');
      }

      // =====================================================
      // 8. DIRECT STRING URL
      // =====================================================

      if (typeof output === 'string') {
        console.log('Try-on image URL:', output);

        return output;
      }

      // =====================================================
      // 9. GRADIO FILE URL
      // =====================================================

      if (output.url) {
        console.log('Try-on image URL:', output.url);

        return output.url;
      }

      // =====================================================
      // 10. FILE PATH
      // =====================================================

      if (output.path) {
        console.log('Try-on image path:', output.path);

        return output.path;
      }

      // =====================================================
      // 11. NESTED IMAGE URL
      // =====================================================

      if (output.image?.url) {
        console.log('Try-on nested image URL:', output.image.url);

        return output.image.url;
      }

      // =====================================================
      // 12. NESTED IMAGE PATH
      // =====================================================

      if (output.image?.path) {
        console.log('Try-on nested image path:', output.image.path);

        return output.image.path;
      }

      // =====================================================
      // 13. UNKNOWN RESPONSE
      // =====================================================

      console.error('Unknown FASHN output:', output);

      throw new Error('Unable to read AI try-on result.');
    } catch (error: any) {
      console.error('========================================');
      console.error('TRY-ON SERVICE ERROR');
      console.error('========================================');

      console.error('Error message:', error?.message);

      console.error('Error status:', error?.status);

      console.error('Error details:', error?.details);

      console.error('Full error:', error);

      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new BadRequestException(
        error?.message || 'Virtual try-on failed. Please try again.',
      );
    } finally {
      // =====================================================
      // DELETE PERSON TEMP FILE
      // =====================================================

      try {
        await unlink(personFile);

        console.log('Temporary person image deleted.');
      } catch {
        // Ignore cleanup error
      }

      // =====================================================
      // DELETE GARMENT TEMP FILE
      // =====================================================

      try {
        await unlink(garmentFile);

        console.log('Temporary garment image deleted.');
      } catch {
        // Ignore cleanup error
      }
    }
  }

  // =========================================================
  // CATEGORY NORMALIZATION
  // =========================================================

  private normalizeCategory(category: string): string {
    const value = String(category || '')
      .trim()
      .toLowerCase();

    // -------------------------------------------------------
    // TOPS
    // -------------------------------------------------------

    const tops = [
      'blouse',
      'crop top',
      'crop-top',
      'top',
      'shirt',
      'kurti',
      'kurta',
      't-shirt',
      'tshirt',
    ];

    if (tops.includes(value)) {
      return 'tops';
    }

    // -------------------------------------------------------
    // BOTTOMS
    // -------------------------------------------------------

    const bottoms = [
      'bottom',
      'pants',
      'trousers',
      'jeans',
      'skirt',
      'shorts',
      'palazzo',
    ];

    if (bottoms.includes(value)) {
      return 'bottoms';
    }

    // -------------------------------------------------------
    // ONE PIECES
    // -------------------------------------------------------

    const onePieces = [
      'frock',
      'dress',
      'party wear',
      'party-wear',
      'gown',
      'lehenga',
      'one piece',
      'one-piece',
      'jumpsuit',
      'romper',
      'maxi',
      'anarkali',
    ];

    if (onePieces.includes(value)) {
      return 'one-pieces';
    }

    // Default
    return 'one-pieces';
  }
}
