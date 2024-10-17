import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carro } from './carros/entitys/carro.entity';
import { CarrosModule } from './carros/carros.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Marca } from './carros/entitys/marca.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'carrosdb',
      entities: [Carro,Marca],
      synchronize: true,  
    }),
    CarrosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


