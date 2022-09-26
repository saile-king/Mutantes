/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Superpoder } from "./superpoder.entity";

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

  @OneToMany(() =>Superpoder, (super_poder) => super_poder.mutante)
    super_poder: Superpoder[]
}
