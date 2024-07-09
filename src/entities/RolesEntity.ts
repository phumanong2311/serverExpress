import { Entity, ManyToMany, Property } from "@mikro-orm/core";
import { BaseEntity } from "./BaseEntity";
import { Users } from "./UsersEntity";

@Entity()
export class Roles extends BaseEntity {
  @Property()
  name!: string;

  @Property()
  description!: string;
}
