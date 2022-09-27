/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Superpoder } from "./superpoder.entity";
import { Vehiculo } from "./vehiculo.entity";

@Entity()
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

  @Column({ type: 'varchar', length: 100, nullable: false })
  grupo: string;

  @CreateDateColumn({
    type: 'timestamp'
  })
  createAt: Date;

  @UpdateDateColumn({
    type: 'timestamp'
  })
  updateAt: Date;

  @ManyToMany(() =>Superpoder, (superpoderes) => superpoderes.mutantes)
  @JoinTable()
  superpoderes: Superpoder[]

  @ManyToMany(() => Vehiculo, (vehiculo) => vehiculo.mutantes)
  @JoinTable()
  vehiculos: Vehiculo[];
}
