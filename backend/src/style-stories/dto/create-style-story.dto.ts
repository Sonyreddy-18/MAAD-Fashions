import { IsInt, IsOptional, IsString, IsUrl, Max, Min } from 'class-validator';

export class CreateStyleStoryDto {
  @IsInt()
  productId: number;

  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @IsString()
  story: string;

  @IsOptional()
  @IsString()
  occasion?: string;

  @IsOptional()
  @IsUrl()
  mediaUrl?: string;

  @IsOptional()
  @IsString()
  mediaType?: 'IMAGE' | 'VIDEO';
}
