import { Module } from '@nestjs/common';
import { OrmModule } from 'src/orm/orm.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [OrmModule],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
