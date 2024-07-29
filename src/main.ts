import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
// import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const options = new DocumentBuilder()
  // .setTitle('API-CURIO')
  // .setDescription('CURIOAPI')
  // .addTag('Curio')
  // .addBearerAuth(
  //   { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
  //   'access-token',
  // )
  // .build();
  // const document = SwaggerModule.createDocument(app, options);
  // SwaggerModule.setup('api', app, document);
  // app.useGlobalPipes(new ValidationPipe());
  app.enableCors()
  await app.listen(3000);
}
bootstrap();
