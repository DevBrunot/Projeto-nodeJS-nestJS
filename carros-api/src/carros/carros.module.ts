import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarrosController } from './controller/carros.controller';
import { CarrosService } from './carros.service';
import { Carro } from './entitys/carro.entity';
import { Marca } from './entitys/marca.entity';
import { MarcaService } from './marca.service';

@Module({
  imports: [TypeOrmModule.forFeature([Carro, Marca])],
  controllers: [CarrosController],
  providers: [CarrosService, MarcaService],
})
export class CarrosModule {}