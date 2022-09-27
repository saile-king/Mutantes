/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateSuperpoderDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;
}

export class UpdateSuperpoderDto extends PartialType(CreateSuperpoderDto) {}
