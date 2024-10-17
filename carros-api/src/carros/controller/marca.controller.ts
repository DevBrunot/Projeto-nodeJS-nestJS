import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { MarcaService } from "../marca.service";
import { CreateMarcaDto } from "../dto/create-marca.dto";
import { UpdateMarcaDto } from "../dto/update-marca.dto";


@Controller('Marca')
export class CarrosController {
  constructor(private marcaService: MarcaService ) {}

  @Get()
  findAll() {
    return this.marcaService.findAll(), this.marcaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const foundCarros = await this.marcaService.findOne(+id);
    return foundCarros;
  
  }

  @Post()
  async create(@Body() createMarcaDto: CreateMarcaDto) {
    const createdMarca = await this.marcaService.create(createMarcaDto);
    return createdMarca;
  }

 

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.marcaService.remove(+id);
  }
  
}
