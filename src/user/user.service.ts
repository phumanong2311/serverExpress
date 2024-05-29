import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager, EntityRepository, QueryOrder } from '@mikro-orm/sqlite';
import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/UserEntity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
    private readonly em: EntityManager,
  ) {}
  async findAll() {
    return await this.userRepository.findAll({
      orderBy: { fullName: QueryOrder.DESC },
      limit: 20,
    });
  }

  async findByID(id: number) {
    return await this.userRepository.findOne({ id });
  }

  async create(data: User) {
    const user = await this.userRepository.create(data);
    await this.em.flush();
    return user;
  }
}
