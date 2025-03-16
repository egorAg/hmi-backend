import { Body, Controller, Patch } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateBrandUseCase } from './update-brand.usecase';
import { UpdateBrandDto } from './update-brand.dto';
import { BrandMapper } from '../../../../domain';

@ApiTags('Brands')
@Controller('brands')
export class UpdateBrandController {
  constructor(private readonly updateBrandUseCase: UpdateBrandUseCase) {}

  @ApiOperation({ summary: 'Обновить бренд' })
  @ApiResponse({ status: 200, description: 'Бренд успешно обновлён' })
  @ApiResponse({ status: 404, description: 'Бренд не найден' })
  @ApiBearerAuth()
  @Patch()
  async update(@Body() dto: UpdateBrandDto) {
    const brand = await this.updateBrandUseCase.execute(dto.id, dto.name);
    return BrandMapper.toPersistence(brand);
  }
}
