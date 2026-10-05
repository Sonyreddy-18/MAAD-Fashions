import { IsBoolean, IsEnum, IsOptional } from 'class-validator';
import { StyleStoryStatus } from '../../generated/prisma/client';

export class UpdateStyleStoryStatusDto {
  @IsEnum(StyleStoryStatus)
  status: StyleStoryStatus;

  @IsOptional()
  @IsBoolean()
  featured?: boolean;
}
