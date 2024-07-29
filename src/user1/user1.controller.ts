import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { User1Service } from './user1.service';
import { CreateUser1Dto } from './dto/create-user1.dto';
import { UpdateUser1Dto } from './dto/update-user1.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('user')
export class User1Controller {
  constructor(private readonly user1Service: User1Service) {}

  @Post('create')
  create(@Body() createUser1Dto: CreateUser1Dto) {
    return this.user1Service.create(createUser1Dto);
  }
@Get('login')
  findUser(@Body() user:any ) {

    return this.user1Service.findUser(user.email,user.password);
  }


  
  @Get('')
  findAll() {
    return this.user1Service.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.user1Service.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUser1Dto: UpdateUser1Dto) {
    return this.user1Service.update(+id, updateUser1Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.user1Service.remove(+id);
  }
}
