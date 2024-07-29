import { Module } from '@nestjs/common';
import { FormaterService } from './formater.service';
import { FormaterController } from './formater.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Formater} from './entities/formater.entity';
@Module({
  controllers: [FormaterController],
  providers: [FormaterService],
  imports: [TypeOrmModule.forFeature([Formater])],
  exports: [FormaterService],
})
export class FormaterModule {}
