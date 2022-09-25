/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name : 'mutantes' })
export class Mutante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  nombre: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  alter_ego: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  ciudad_operacion: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  condicion: string;

  @Column({ type: 'varchar', length: 350, nullable: false })
  imagen: string;

  @Column({ type: 'varchar', length: 350, nullable: false })
  grupo: string;
}
