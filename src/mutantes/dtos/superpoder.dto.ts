/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateSuperpoderDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly mutante_id: number;
}

export class UpdateSuperpoderDto extends PartialType(CreateSuperpoderDto) {}
