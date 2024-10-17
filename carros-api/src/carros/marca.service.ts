import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Marca } from './entitys/marca.entity';
import { CreateMarcaDto } from './dto/create-marca.dto';


@Injectable()
export class MarcaService {
  constructor(
    @InjectRepository(Marca)
    private readonly marcaRepository: Repository<Marca>,
  ) {}


  async create(createMarcaDto: CreateMarcaDto): Promise<Marca> {
    const { nome } = createMarcaDto;

    const marca = new Marca();
    marca.marcacarros = nome;

    return this.marcaRepository.save(marca);
  }

  
  async findAll(): Promise<Marca[]> {
    return this.marcaRepository.find();
  }


  async findOne(id: number): Promise<Marca> {
    return this.marcaRepository.findOne({ where: { id } });
  }


  async remove(id: number): Promise<void> {
    await this.marcaRepository.delete(id);
  }

 
  async update(id: number, nome: string): Promise<Marca> {
    const marca = await this.marcaRepository.findOne({ where: { id } });
    if (!marca) {
      marca.marcacarros = nome;
      return this.marcaRepository.save(marca);
    }
    
  }
}
