/* eslint-disable prettier/prettier */

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Mutante } from "./mutante.entity";

@Entity()
export class Superpoder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombre: string;

  // @CreateDateColumn({
  //   type: 'timestamptz',
  //   default: () => 'CURRENT_TIMESTAMP',
  // })
  // createAt: Date;

  // @UpdateDateColumn({
  //   type: 'timestamptz',
  //   default: () => 'CURRENT_TIMESTAMP',
  // })
  // updateAt: Date;

  @ManyToOne(() => Mutante, (mutante) => mutante.super_poder)
  mutante: Mutante;

}
