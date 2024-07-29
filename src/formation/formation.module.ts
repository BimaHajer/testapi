import { Module } from '@nestjs/common';
import { FormationService } from './formation.service';
import { FormationController } from './formation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Formation } from './entities/formation.entity';

@Module({
  controllers: [FormationController],
  providers: [FormationService],
  imports: [TypeOrmModule.forFeature([Formation])],
  exports: [FormationService],
})
export class FormationModule {}
