/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMutanteDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly alter_ego: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly ciudad_operacion: string;

  @ApiProperty({
    description: 'su condición: si está en libertad, detenido o desconocido',
  })
  @IsString()
  @IsNotEmpty()
  readonly condicion: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  readonly imagen: string;

  @ApiProperty({
    description: 'grupo de súper héroes o villanos al que pertenece ',
  })
  @IsString()
  readonly grupo: string;
}

export class UpdateMutanteDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly ciudad_operacion: string;
}
