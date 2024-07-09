import { Opt, PrimaryKey, Property } from '@mikro-orm/core';

export abstract class BaseEntity {
  @PrimaryKey()
  id!: number;

  @Property({ nullable: true })
  createdAt: Date & Opt = new Date();

  @Property({ onUpdate: () => new Date(), nullable: true})
  updatedAt: Date & Opt = new Date();
}
