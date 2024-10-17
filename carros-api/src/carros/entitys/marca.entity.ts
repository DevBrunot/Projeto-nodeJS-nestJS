import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Carro } from './carro.entity';

@Entity()
export class Marca {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  marcacarros: string;

  @OneToMany(() => Carro, carro => carro.marca) 
  carros: Carro;
}
