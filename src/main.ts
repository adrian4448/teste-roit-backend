import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Desafio ROIT BANK')
    .setDescription('API desenvolvida para cumprir o desafio para Engenheiro de software fullstack')
    .setVersion('1.0')
    .build();

  const doc = SwaggerModule.createDocument(app, swaggerConfig);  
  SwaggerModule.setup('docs', app, doc);

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
