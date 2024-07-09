import { Constructor, EntityData } from '@mikro-orm/core';
import { Factory } from '@mikro-orm/seeder';
import { Users } from 'src/entities';

export class UserSeeder extends Factory<Users> {
  protected definition(): EntityData<Users> {
    throw new Error('Method not implemented.');
  }
  model: Constructor<Users>;
  define(): Partial<Users> {
    return {
      fullName: 'Super Admin',
      email: 'admin@gmail.com',
      password: 'password',
    };
  }
}
