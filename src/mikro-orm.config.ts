import { defineConfig } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SeedManager } from '@mikro-orm/seeder';
import { Users } from './entities/';

export default defineConfig({
  dbName: 'warehouse',
  user: 'warehouse',
  password: 'warehouse',
  port: 5432,
  entities: [Users],
  metadataProvider: TsMorphMetadataProvider,
  debug: true,
  extensions: [SeedManager],
});
