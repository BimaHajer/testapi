import { PartialType } from '@nestjs/mapped-types';
import { CreateFormaterDto } from './create-formater.dto';

export class UpdateFormaterDto extends PartialType(CreateFormaterDto) {}
