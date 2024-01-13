import { DatabaseService } from '@core/db/services/database.service';
import { Injectable } from '@nestjs/common';
import { ExampleEntity } from './entities/example.entity';

@Injectable()
export class ExampleService extends DatabaseService {
  getAllGroups(): Promise<ExampleEntity[]> {
    return this.db.examples.findAll();
  }
}
