import { defineConfig } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SeedManager } from '@mikro-orm/seeder';
import { User } from './entities/';

export default defineConfig({
  dbName: 'cpass',
  user: 'postgres',
  password: 'postgres',
  port: 5432,
  entities: [User],
  metadataProvider: TsMorphMetadataProvider,
  debug: true,
  extensions: [SeedManager],
});
