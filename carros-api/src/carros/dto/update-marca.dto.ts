import { IsOptional, IsString } from 'class-validator';

export class UpdateMarcaDto {
  @IsOptional()
  @IsString()
  nome?: string; 
}