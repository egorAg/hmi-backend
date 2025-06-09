import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GetBrandByIdUseCase } from './get-brand-by-id.usecase';
import { GetBrandByIdDto } from './get-brand-by-id.dto';
import { BrandMapper } from '@domain/brand';

@ApiTags('Brands')
@Controller('brands')
export class GetBrandByIdController {
  constructor(private readonly getBrandByIdUseCase: GetBrandByIdUseCase) {}

  @ApiOperation({ summary: 'Получить бренд по ID' })
  @ApiResponse({ status: 200, description: 'Бренд найден' })
  @ApiResponse({ status: 404, description: 'Бренд не найден' })
  @ApiBearerAuth()
  @Get(':id')
  async getById(@Param() params: GetBrandByIdDto) {
    const brand = await this.getBrandByIdUseCase.execute(params.id);
    return BrandMapper.toPersistence(brand);
  }
}
