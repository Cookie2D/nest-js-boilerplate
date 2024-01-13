import { NotFoundException } from '@nestjs/common';
import {
  DeepPartial,
  DeleteResult,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
  SelectQueryBuilder,
  UpdateResult,
} from 'typeorm';
import pluralize from 'pluralize';
import type { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

import { capitalizeText } from '@core/helpers';
import { globalDashesRegex } from '@core/constants';

export class DatabaseRepository<T extends object> {
  private readonly repository: Repository<T>;
  private readonly singularTableName: string;
  private readonly pluralTableName: string;

  constructor(repository: Repository<T>) {
    this.repository = repository;
    this.singularTableName = pluralize
      .singular(repository.metadata.tableName)
      .replace(globalDashesRegex, ' ');
    this.pluralTableName = pluralize
      .plural(repository.metadata.tableName)
      .replace(globalDashesRegex, ' ');
  }

  findOne(options: FindOneOptions<T>): Promise<T> {
    return this.repository.findOne(options);
  }

  async findOneOrFail(options: FindOneOptions<T>): Promise<T> {
    const document = await this.findOne(options);

    if (!document) {
      throw new NotFoundException(`${capitalizeText(this.singularTableName)} not found`);
    }

    return document;
  }

  findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return this.repository.find(options);
  }

  async findAllOrFail(options?: FindManyOptions<T>): Promise<T[]> {
    const documents = await this.findAll(options);

    if (!documents.length) {
      throw new NotFoundException(`No ${capitalizeText(this.pluralTableName)} found`);
    }

    return documents;
  }

  create(options: DeepPartial<T>): Promise<T> {
    const document = this.repository.create(options);

    return this.repository.save(document);
  }

  update(
    condition: FindOptionsWhere<T>,
    options: QueryDeepPartialEntity<T>,
  ): Promise<UpdateResult> {
    return this.repository.update(condition, options);
  }

  delete(options: FindOptionsWhere<T>): Promise<DeleteResult> {
    return this.repository.delete(options);
  }

  createQueryBuilder(alias?: string): SelectQueryBuilder<T> {
    return this.repository.createQueryBuilder(alias);
  }

  async checkNotExists(options: FindOptionsWhere<T>): Promise<void> {
    const document = await this.findOne({ where: options });

    if (document) {
      throw new NotFoundException(
        `${capitalizeText(this.singularTableName)} with provided params already exists`,
      );
    }
  }
}
