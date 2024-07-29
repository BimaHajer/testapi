import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Formation } from './entities/formation.entity';
import { CreateFormationDto } from './dto/create-formation.dto';


@Injectable()
export class FormationService {
  findAndCount() {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Formation)
    private readonly formationRepository: Repository<Formation>,
  ) {}

  async findAll() {
    return await this.formationRepository.findAndCount();
  }

  async findOne(id: number) {
    return await this.formationRepository.findOne({where:{id:id}});
  }

  async create(createFormationDto: CreateFormationDto): Promise<Formation> {
    const formation = this.formationRepository.create(createFormationDto);
    return await this.formationRepository.save(formation);
  }

  // async update(id: number, formationData: Partial<Formation>): Promise<Formation> {
  //   // await this.formationRepository.update(id, formationData);
  //   await return     this.formationRepository.update(id, formationData);
  // }

  async remove(id: number): Promise<void> {
    await this.formationRepository.delete(id);
  }
}
