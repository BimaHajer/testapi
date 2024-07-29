import { Injectable, NotFoundException } from '@nestjs/common';
/// import
import { CreateUser1Dto } from './dto/create-user1.dto';
import { UpdateUser1Dto } from './dto/update-user1.dto';
import { User1 } from './entities/user1.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { promises } from 'dns';
// import * as bcrypt from 'bcrypt';
const bcrypt = require('bcrypt');

@Injectable()
export class User1Service {

 
  constructor(
    @InjectRepository(User1)
    private readonly userResposity: Repository<User1>,
  ) { }
  async create(createUserDto: CreateUser1Dto) {
  
    let newUser=this.userResposity.create(createUserDto)
    newUser.isActive=true
    const tokenLength = 50;
    newUser.resToken = this.generateAlphabeticToken(tokenLength);
    newUser.password=(await this.hashPassword(newUser.password)).toString()
    return await this.userResposity.save(newUser);
  }
  generateAlphabeticToken(length: number): string {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@&$';
    let token = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        token += alphabet[randomIndex];
    }
    return token; 
}

async  hashPassword(password: string): Promise<string> {
  const saltRounds = 10; // Number of salt rounds to use for hashing
  const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}
  async findUser(email:string,password:string):Promise<string>{
    console.log("email",email)
    const newUser = await this.userResposity.findOne({  where: { email:email } });
    console.log("password",password)
   
    if (!newUser) {
      throw new Error('User not found');
    }
    else{
    const isPasswordValid = await bcrypt.compare(password, (newUser.password).toString());
     if (!isPasswordValid) {
      throw new Error('Invalid password');
    }
    return newUser.resToken
  }
}
async findAll() {
  return await this.userResposity.findAndCount(); // Exclude password from response
}
async findById(id: number): Promise<object> {
  const user = await this.userResposity.findOne({
    where: { id: id },
  
  });

  return user
}
async update(id: number, updateUserDto: UpdateUser1Dto) {
  const user = await this.userResposity.findOne({where:{id:id}})
  if (!user) {
    throw new NotFoundException(`User #${id} not found`);
  }
  if (updateUserDto.password) {
    const bcrypt = require('bcrypt');
    const salt = 10;
    const saltRounds = await bcrypt.genSalt(salt);
    const hash = await bcrypt.hash(updateUserDto.password, saltRounds);
    updateUserDto.password = hash
    updateUserDto = updateUserDto;
  }
  const userPreload = await this.userResposity.preload({
    id: +id,
    ...updateUserDto,
  });

  return this.userResposity.save(userPreload);
}
async remove(id: number,) {
  const user = await this.userResposity.findOne({where:{id:id}})
  const userPreload=await this.userResposity.preload({
    ...user,
    isActive: false,
  });
  return this.userResposity.save(userPreload)
}


}
