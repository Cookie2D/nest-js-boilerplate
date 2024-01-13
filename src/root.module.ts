import { Module } from '@nestjs/common';
import { DatabaseModule } from '@core/db/database.module';
import { ExampleModule } from '@modules/example/example.module';

@Module({
  imports: [DatabaseModule, ExampleModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {}
