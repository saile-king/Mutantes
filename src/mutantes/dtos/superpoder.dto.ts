/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsPositive, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateSuperpoderDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @ApiProperty()
  @IsPositive()
  @IsNotEmpty()
  readonly mutanteId: number;
}

export class UpdateSuperpoderDto extends PartialType(CreateSuperpoderDto) {}
