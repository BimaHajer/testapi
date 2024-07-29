import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { FormationModule } from './formation/formation.module';
import { FormaterModule } from './formater/formater.module';
import { CenterModule } from './center/center.module';
import { User1Module } from './user1/user1.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: "postgres",
        password: "postgres",
        database: "curioIO",
        autoLoadEntities: true,
        synchronize: true,
      }),
  
        }),
        ConfigModule.forRoot(),
        CustomerModule, FormationModule, FormaterModule, CenterModule, User1Module, AuthModule],
  controllers: [AppController,],
  providers: [AppService, ],
})
export class AppModule {}
