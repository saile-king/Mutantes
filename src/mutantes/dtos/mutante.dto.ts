/* eslint-disable prettier/prettier */
import { ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';
import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';

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

  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  readonly superpodersIds: number[];

  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  readonly vehiculosIds: number[]
}

export class UpdateMutanteDto extends PartialType(
  OmitType(CreateMutanteDto, ['alter_ego','condicion','grupo','imagen'] as const),
) {}
