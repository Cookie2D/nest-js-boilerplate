import { DataSource } from 'typeorm';
import { join } from 'node:path';
import { Environment } from '@core/environment';

const isTypeorm = Environment.NODE_ENV === 'TYPEORM';
const filesExtension = isTypeorm ? '.ts' : '.js';

const cwd = process.cwd() + `/${isTypeorm ? 'src' : 'dist'}`;

const dataSource = new DataSource({
  type: 'postgres',
  url: Environment.POSTGRES_URL,

  migrationsRun: false,
  synchronize: true,

  entities: [join(cwd, '/**/entities/*.entity' + filesExtension)],
  migrations: [join(cwd, '/**/migrations/*' + filesExtension)],
  subscribers: [join(cwd, '/**/subscribers/*' + filesExtension)],
});

export default dataSource;
