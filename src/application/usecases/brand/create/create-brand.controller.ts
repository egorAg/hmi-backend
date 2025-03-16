import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateBrandUseCase } from './create-brand.usecase';
import { CreateBrandDto } from './create-brand.dto';
import { BrandMapper } from '../../../../domain';

@ApiTags('Brands')
@Controller('brands')
export class CreateBrandController {
  constructor(private readonly createBrandUseCase: CreateBrandUseCase) {}

  @ApiOperation({ summary: 'Создать новый бренд' })
  @ApiResponse({ status: 201, description: 'Бренд успешно создан' })
  @Post()
  async create(@Body() dto: CreateBrandDto) {
    const brand = await this.createBrandUseCase.execute(dto.name);
    return BrandMapper.toPersistence(brand);
  }
}
