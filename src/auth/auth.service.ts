import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { Users } from 'src/entities';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: EntityRepository<Users>,
  ) {}
  async login(email: string, password: string) {
    const user = await this.userRepository.findOne({ email });
    if (!user) {
      return null;
    }
    if (user.password !== password) {
      return null;
    }
    const { password: ps, ...publicUser } = user
    const token = jwt.sign(publicUser, 'warehouse');
    return token;
  }
}
