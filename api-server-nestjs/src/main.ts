import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
/*import { config } from 'dotenv';


// config(); // Load environment variables from .env file*/
const PORT = 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
      .setTitle('Budget pro')
      .setDescription('Budget pro description')
      .setVersion('1.0')
      .addServer('http://localhost:5000/', 'Local environment')
      .addBearerAuth(undefined, 'Apikey')
      .addBearerAuth(undefined, 'Authorization')
      .addTag('Budget pro Tag')
      .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(PORT);
  console.log('server is running at: ' + PORT);
}

bootstrap();
