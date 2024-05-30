import { Constructor, EntityData } from '@mikro-orm/core';
import { Factory } from '@mikro-orm/seeder';
import { User } from 'src/entities';

export class UserSeeder extends Factory<User> {
  protected definition(): EntityData<User> {
    throw new Error('Method not implemented.');
  }
  model: Constructor<User>;
  define(): Partial<User> {
    return {
      fullName: 'Super Admin',
      email: 'admin@gmail.com',
      password: 'password',
    };
  }
}
