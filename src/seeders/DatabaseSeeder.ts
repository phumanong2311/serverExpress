import { Seeder } from '@mikro-orm/seeder';
import { UserSeeder } from './UserSeeder';

export class DatabaseSeeder extends Seeder {
  orm: any;
  async run(): Promise<void> {
    const seeder = this.orm.getSeeder();
    await seeder.seed(UserSeeder, { amount: 10 }); // seed 10 users
  }
}
