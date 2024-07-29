import { Module } from '@nestjs/common';
import { User1Service } from './user1.service';
import { User1Controller } from './user1.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User1 } from './entities/user1.entity';

@Module({
  controllers: [User1Controller],
  providers: [User1Service],
  imports:[TypeOrmModule.forFeature([User1])]
})
export class User1Module {}
