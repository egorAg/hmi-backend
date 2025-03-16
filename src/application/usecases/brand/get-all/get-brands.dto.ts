import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min, Max } from 'class-validator';

export class GetBrandsDto {
  @ApiProperty({ example: 1, description: 'Номер страницы', required: false })
  @IsInt()
  @Min(1)
  page?: number = 1;

  @ApiProperty({
    example: 10,
    description: 'Количество записей на странице',
    required: false,
  })
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number = 10;
}
