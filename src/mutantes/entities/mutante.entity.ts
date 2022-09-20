/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Mutante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  alter_ego: string;

  @Column()
  ciudad_operacion: string;

  @Column()
  condicion: string;

  @Column()
  imagen: string;

  @Column()
  grupo: string;
}
