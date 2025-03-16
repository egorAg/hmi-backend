import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length, IsUUID } from 'class-validator';

export class UpdateCategoryDto {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'ID категории',
  })
  @IsUUID()
  id: string;

  @ApiProperty({
    example: 'Игровые ноутбуки',
    description: 'Новое название категории',
  })
  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  name: string;
}
