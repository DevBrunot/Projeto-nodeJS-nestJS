import { IsOptional, IsString, IsInt } from 'class-validator';

export class UpdateCarroDto {
  @IsOptional()
  @IsString()
  marcaNome?: string; 

  @IsOptional()
  @IsString()
  modelo?: string;

  @IsOptional()
  @IsInt()
  ano?: number;
}