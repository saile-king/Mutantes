/* eslint-disable prettier/prettier */
import {
  IsNotEmpty,
  IsString,
  IsUrl,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateMutanteDto {
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @IsString()
  @IsNotEmpty()
  readonly alter_ego: string;

  @IsString()
  @IsNotEmpty()
  readonly ciudad_operacion: string;

  @IsString()
  @IsNotEmpty()
  readonly condicion: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  readonly imagen: string;

  @IsString()
  @IsNotEmpty()
  readonly grupo: string;
}

export class UpdateMutanteDto extends PartialType(CreateMutanteDto) {}
