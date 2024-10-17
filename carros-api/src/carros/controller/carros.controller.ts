import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CarrosService } from "../carros.service";
import { UpdateCarroDto } from "../dto/update-carro.dto";
import { CreateCarroDto } from "../dto/create-carro.dto";
import { MarcaService } from "../marca.service";

@Controller('Carros')
export class CarrosController {
  constructor(private carrosService: CarrosService ) {}
  

  @Get()
  findAll() {
    return this.carrosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const foundCarros = await this.carrosService.findOne(+id);
    return foundCarros;
  
  }

  @Post()
  async create(@Body() createCarroDto: CreateCarroDto) {
    const createdCarro = await this.carrosService.create(createCarroDto);
    return createdCarro;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCarroDto: UpdateCarroDto) {
    return await this.carrosService.update(+id, updateCarroDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.carrosService.remove(+id);
  }

  
  
  
}
