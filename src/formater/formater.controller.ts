import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FormaterService } from './formater.service';
import {
  
  CreateFormaterDto } from './dto/create-formater.dto';
import { UpdateFormaterDto } from './dto/update-formater.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('formater')
@ApiTags("formater")

export class FormaterController {
  constructor(private readonly formaterService: FormaterService) {

  }

  @Post("create")
  create(@Body() createFormaterDto: CreateFormaterDto) {
    return this.formaterService.create(createFormaterDto);
  }

  @Get()
  findAll() {
    return this.formaterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formaterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormaterDto: UpdateFormaterDto) {
    return this.formaterService.update(+id, updateFormaterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formaterService.remove(+id);
  }
}
