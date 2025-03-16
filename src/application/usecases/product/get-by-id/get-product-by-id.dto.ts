import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class GetProductByIdDto {
  @ApiProperty({
    example: '770e8400-e29b-41d4-a716-446655440000',
    description: 'ID продукта',
  })
  @IsUUID()
  id: string;
}
