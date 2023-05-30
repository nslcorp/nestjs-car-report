import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post('/signup')
  createUser(@Body() body: any) {
    return 'createUser';
  }

  @Get('/:id')
  findUser(@Param('id') id: string) {
    return 'findUser';
  }

  @Get()
  findAllUsers() {
    return 'findAllUsers';
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: any) {
    return 'updateUser';
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return 'deleteUser';
  }
}
