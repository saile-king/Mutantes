/* eslint-disable prettier/prettier */

import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Mutante } from "./mutante.entity";

@Entity()
export class Superpoder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombre: string;

  @CreateDateColumn({
    type: 'timestamp'
  })
  createAt: Date;

  @UpdateDateColumn({
    type: 'timestamp'
  })
  updateAt: Date;

  @ManyToMany(() => Mutante, (mutante) => mutante.superpoderes)
  mutantes: Mutante[];

}
