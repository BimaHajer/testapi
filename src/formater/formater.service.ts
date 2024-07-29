import { Injectable } from '@nestjs/common';
import { CreateFormaterDto } from './dto/create-formater.dto';
import { UpdateFormaterDto } from './dto/update-formater.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Formater } from './entities/formater.entity';


@Injectable()
export class FormaterService {
  constructor(
    @InjectRepository(Formater)
    private formaterRepository: Repository<Formater>,
  ) {}

  async create(createFormaterDto: CreateFormaterDto): Promise<Formater> {
    console.log("createUser")
    const bcrypt = require('bcrypt');
    const salt = 10;
    const saltRounds = await bcrypt.genSalt(salt);
    const hash = await bcrypt.hash(createFormaterDto.password, saltRounds);
    const formaterDto:  CreateFormaterDto = createFormaterDto;
    formaterDto.password = hash
    formaterDto.role = "formater"
    formaterDto.createdBy=1
    formaterDto.resToken=this.createResToken()
    const newFormater = this.formaterRepository.create(createFormaterDto);
    return await this.formaterRepository.save(newFormater);
  // return "hello"
  }
  createResToken() {
    let allwedChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let token ="";
    for (let i = 0; i < 64; i++) {
      token += allwedChar.charAt(Math.floor(Math.random() * allwedChar.length));
    }
    return token;
  }
  async findbyEmail(email: string): Promise<number | undefined> {
    const user = await this.formaterRepository.findOne({ where: { email: email } });
    return user.id
  }
  async findById(id: number): Promise<object> {
    const user = await this.formaterRepository.findOne({
      where: { id: id },
    });
    const {  email, Password, ...result } = user;
    return result
  }

  async find(): Promise<[Formater[], number]> {
    let result: {
      email?: string;
      name: string;
      resToken?: string;
      role?: string;
      picture?: string;
      createdBy?: number;
      active?: boolean;
  }
    const formaterObjectsAndCount: [Formater[], number] = await this.formaterRepository.findAndCount();
    const formaterObjects: Formater[] = [];
    const formaters: Formater[] = formaterObjectsAndCount[0];
    for (let item of formaters) {
      formaterObjects.push(item)
    }
    formaterObjectsAndCount[0] = formaterObjects;
    return await formaterObjectsAndCount;
  }

  
  
  async findAll(): Promise<Formater[]> {
    return await this.formaterRepository.find();
  }

  async findOne(id: number): Promise<Formater> {
    return await this.formaterRepository.findOne({where:{id:id}});
  }



  async update(id: number, formaterData: Partial<Formater>): Promise<Formater> {
    await this.formaterRepository.update(id, formaterData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.formaterRepository.delete(id);
  }
}
