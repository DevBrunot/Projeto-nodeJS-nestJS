import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carro } from './entitys/carro.entity';
import { Marca } from './entitys/marca.entity';
import { CreateCarroDto } from './dto/create-carro.dto';
import { UpdateCarroDto } from './dto/update-carro.dto';

@Injectable()
export class CarrosService {
  constructor(
    @InjectRepository(Carro)
    private readonly carroRepository: Repository<Carro>,
    
    @InjectRepository(Marca)
    private readonly marcaRepository: Repository<Marca>,
  ) {}


  async create(createCarroDto: CreateCarroDto): Promise<Carro> {
    const { modelo, ano, marcaNome } = createCarroDto;

    
    let marca = await this.marcaRepository.findOne({ where: { marcacarros: marcaNome } });
    

    if (!marca) {
      marca = this.marcaRepository.create({ marcacarros: marcaNome });
      marca = await this.marcaRepository.save(marca);
    }

    const carro = this.carroRepository.create({
      modelo,
      ano,
      marca,
    });

    return this.carroRepository.save(carro);
  }


  findAll(): Promise<Carro[]> {
    return this.carroRepository.find({ relations: ['marca'] });
  }


  findOne(id: number): Promise<Carro> {
    return this.carroRepository.findOne({ where: { id }, relations: ['marca'] });
  }


  async update(id: number, updateCarroDto: UpdateCarroDto): Promise<Carro> {
    const carro = await this.carroRepository.findOne({ where: { id }, relations: ['marca'] });
    if (!carro) {
      throw new Error(`Carro com ID ${id} não encontrado`);
    }

    const { modelo, ano, marcaNome } = updateCarroDto;

  
    if (marcaNome) {
      let marca = await this.marcaRepository.findOne({ where: { marcacarros: marcaNome } });
      if (!marca) {
        marca = this.marcaRepository.create({ marcacarros: marcaNome });
        marca = await this.marcaRepository.save(marca);
      }
      carro.marca = marca;
    }

    if (modelo) carro.modelo = modelo;
    if (ano) carro.ano = ano;

    return this.carroRepository.save(carro);
  }


  async remove(id: number): Promise<void> {
    const carro = await this.carroRepository.findOne({ where: { id } });
    if (!carro) {
      throw new Error(`Carro com ID ${id} não encontrado`);
    }

    await this.carroRepository.remove(carro);
  }
}
