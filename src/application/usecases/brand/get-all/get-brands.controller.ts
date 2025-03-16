import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetBrandsUseCase } from './get-brands.usecase';
import { GetBrandsDto } from './get-brands.dto';
import { BrandMapper } from '../../../../domain';

@ApiTags('Brands')
@Controller('brands')
export class GetBrandsController {
  constructor(private readonly getBrandsUseCase: GetBrandsUseCase) {}

  @ApiOperation({ summary: 'Получить список брендов с пагинацией' })
  @ApiResponse({ status: 200, description: 'Список брендов' })
  @Get()
  async getAll(@Query() query: GetBrandsDto) {
    const brands = await this.getBrandsUseCase.execute(query.page, query.limit);
    return brands.map(BrandMapper.toPersistence);
  }
}
