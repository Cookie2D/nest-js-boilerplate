import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ExampleService } from './example.service';
import { Controller, Get } from '@nestjs/common';
import { ExampleEntity } from './entities/example.entity';

@ApiTags('example')
@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  @ApiOkResponse({ type: ExampleEntity, isArray: true })
  @ApiOperation({ description: 'Get all examples' })
  getAllExamples(): Promise<ExampleEntity[]> {
    return this.exampleService.getAllGroups();
  }
}
