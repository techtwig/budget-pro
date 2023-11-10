import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
/*import { config } from 'dotenv';


config(); // Load environment variables from .env file*/
const PORT = 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(PORT);
  console.log('server is running at: ' + PORT);
}

bootstrap();
