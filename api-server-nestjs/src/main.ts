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
      .setTitle('Your API Title')
      .setDescription('Your API description')
      .setVersion('1.0')
      .addServer('http://localhost:3000/', 'Local environment')
      .addServer('https://staging.yourapi.com/', 'Staging')
      .addServer('https://production.yourapi.com/', 'Production')
      .addTag('Your API Tag')
      .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(PORT);
  console.log('server is running at: ' + PORT);
}

bootstrap();
