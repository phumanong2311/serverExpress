import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { User } from 'src/entities';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    MikroOrmModule.forFeature({
      entities: [User],
    }),
  ],
  exports: [MikroOrmModule],
})
export class OrmModule {}
