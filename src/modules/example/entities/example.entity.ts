import { databaseTables } from '@core/db/constants';
import { BaseEntity } from '@core/db/entities/base.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';

@Entity({ name: databaseTables.examples })
export class ExampleEntity extends BaseEntity {
  @ApiProperty()
  @Column()
  content: string;
}
