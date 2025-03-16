import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class UpdateBrandDto {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'ID бренда',
  })
  @IsUUID()
  id: string;

  @ApiProperty({ example: 'Samsung', description: 'Новое название бренда' })
  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  name: string;
}
