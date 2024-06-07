import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
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

  @Patch(':id')
  async update(@Param('id') id: number, @Body() body: any) {
    const author = await this.userService.update(id, body);
    return author;
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    const author = await this.userService.delete(id);
    return author;
  }
}
