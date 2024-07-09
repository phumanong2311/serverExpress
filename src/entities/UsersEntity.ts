import { Entity, ManyToMany, Property } from '@mikro-orm/core';
import { BaseEntity } from './BaseEntity';
import { Roles } from './RolesEntity';

@Entity()
export class Users extends BaseEntity {
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

  @ManyToMany(() => Roles)
  roles: Roles[];
}
