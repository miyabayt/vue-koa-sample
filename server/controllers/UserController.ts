import 'reflect-metadata';
import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  QueryParam,
} from 'routing-controllers';
import { Inject } from 'typedi';
import { validate, ValidationError } from 'class-validator';
import { User } from '../entities/users';
import { UserService } from '../services/UserService';

@JsonController('/users')
export class UserController {
  @Inject() userService: UserService;

  @Get()
  async getUsers(
    @QueryParam('offset') offset: number,
    @QueryParam('limit') limit: number
  ): Promise<{ data: User[]; count: number }> {
    return this.userService
      .findAndCount({ offset, limit })
      .then(([data, count]) => {
        return { data, count };
      });
  }

  @Get('/:id')
  async getUser(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Post()
  async createUser(@Body() user: any) {
    const errors: ValidationError[] = await validate(user);
    this.userService.insert(user);
  }

  @Put('/:id')
  async saveUser(@Param('id') id: number, @Body() user: any) {
    user.id = id;
    return this.userService.update(user);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
