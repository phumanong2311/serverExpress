import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from './BaseEntity';

@Entity()
export class User extends BaseEntity {
  @Property()
  fullName!: string;

  @Property()
  email!: string;

  @Property()
  password!: string;

  @Property()
  phoneNumber!: number;

  @Property({ nullable: true })
  age?: number;
}
