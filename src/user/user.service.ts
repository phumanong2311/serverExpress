import { InjectRepository } from '@mikro-orm/nestjs';
import {
  EntityManager,
  EntityRepository,
  QueryOrder,
} from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { Users } from 'src/entities/UsersEntity';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: EntityRepository<Users>,
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

  async create(data: CreateUserDto) {
    const user = this.userRepository.create(data);
    await this.em.flush();
    return user;
  }

  async update(id: number, data: UpdateUserDto) {
    const user = await this.userRepository.findOneOrFail({ id });
    this.userRepository.assign(user, data);
    await this.em.flush();
    return user;
  }

  async delete(id: number) {
    const user = await this.userRepository.findOneOrFail({ id });
    await this.em.removeAndFlush(user);
    return user;
  }
}
