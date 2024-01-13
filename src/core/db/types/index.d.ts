import { ExampleEntity } from '@modules/example/entities/example.entity';
import { DatabaseRepository } from '../repositories/database.repository';

export type DatabaseEntitiesType = {
  // list here all database entity names and types
  examples: ExampleEntity;
};

export type DatabaseRepositories = {
  [table in keyof DatabaseEntitiesType]: DatabaseRepository<DatabaseEntitiesType[table]>;
};
