import type { EntityManager } from '@mikro-orm/postgresql';
import { Seeder } from '@mikro-orm/seeder';

const seeds = [];

export class MultipleSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    for await (const seed of seeds) {
      console.log(`${seed.name} running...`);
      const s = new seed();
      await s.run(em);
    }
  }
}
