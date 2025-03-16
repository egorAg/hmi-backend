import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateBrandDto {
  @ApiProperty({ example: 'Apple', description: 'Название бренда' })
  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  name: string;
}
