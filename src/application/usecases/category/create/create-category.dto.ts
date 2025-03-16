import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Смартфоны', description: 'Название категории' })
  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  name: string;
}
