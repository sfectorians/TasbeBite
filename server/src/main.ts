// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('TasteBite')
    .setDescription('The TasteBite API description')
    .setVersion('0.1')
    // .addApiKey({type:'apiKey',name:'Authorization',in:'header'},'apiKey')
    .addApiKey({type:"apiKey",name:"Authorization",in:"header"},"apiKey")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(7000);
}
bootstrap();