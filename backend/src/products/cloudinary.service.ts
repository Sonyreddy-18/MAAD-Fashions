import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  constructor() {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  // UPLOAD IMAGE

  uploadImage(file: {
    buffer: Buffer;
    mimetype: string;
  }): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'maad-fashions/products',
          resource_type: 'image',
        },
        (error, result) => {
          if (error || !result) {
            reject(
              new InternalServerErrorException(
                error?.message || 'Image upload failed',
              ),
            );
            return;
          }

          resolve(result);
        },
      );

      uploadStream.end(file.buffer);
    });
  }

  // UPLOAD VIDEO

  uploadVideo(file: {
    buffer: Buffer;
    mimetype: string;
  }): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'maad-fashions/videos',
          resource_type: 'video',
        },
        (error, result) => {
          if (error || !result) {
            reject(
              new InternalServerErrorException(
                error?.message || 'Video upload failed',
              ),
            );
            return;
          }

          resolve(result);
        },
      );

      uploadStream.end(file.buffer);
    });
  }

  // UPLOAD CAROUSEL IMAGE

  uploadCarouselImage(file: {
    buffer: Buffer;
    mimetype: string;
  }): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'maad-fashions/carousel',
          resource_type: 'image',
        },
        (error, result) => {
          if (error || !result) {
            reject(
              new InternalServerErrorException(
                error?.message || 'Carousel image upload failed',
              ),
            );
            return;
          }

          resolve(result);
        },
      );

      uploadStream.end(file.buffer);
    });
  }

  // UPLOAD LARGE COLLECTION IMAGE

  uploadLargeCollectionImage(file: {
    buffer: Buffer;
    mimetype: string;
  }): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'maad-fashions/large-collections',
          resource_type: 'image',
        },
        (error, result) => {
          if (error || !result) {
            reject(
              new InternalServerErrorException(
                error?.message || 'Large collection image upload failed',
              ),
            );
            return;
          }

          resolve(result);
        },
      );

      uploadStream.end(file.buffer);
    });
  }
}
