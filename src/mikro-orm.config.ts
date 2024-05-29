import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SqliteDriver, defineConfig } from '@mikro-orm/sqlite';
import { User } from './entities/';

export default defineConfig({
  driver: SqliteDriver,
  dbName: 'product_management',
  user: 'postgres',
  password: 'password',
  entities: [User],
  metadataProvider: TsMorphMetadataProvider,
  debug: true,
});
