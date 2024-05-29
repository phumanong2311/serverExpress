import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async find() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.userService.findByID(id);
  }

  @Post()
  async create(@Body() body: any) {
    if (!body.name || !body.email) {
      throw new HttpException(
        'One of `name, email` is missing',
        HttpStatus.BAD_REQUEST,
      );
    }
    const user = this.userService.create(body);
    return user;
  }

  // @Put(':id')
  // async update(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
  //   const author = await this.userRepository.findOneOrFail(id);
  //   wrap(author).assign(body);
  //   await this.em.flush();

  //   return author;
  // }
}
