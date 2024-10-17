import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Marca } from './marca.entity';

@Entity()
export class Carro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  modelo: string;

  @Column()
  ano: number;



  @ManyToOne(() => Marca, marca => marca.carros) 
  marca: Marca;
}