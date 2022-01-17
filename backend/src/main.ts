import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'
import { ErrorHandlingInterceptor } from './error-handling.interceptor'
import { NestFactory } from '@nestjs/core'
import { PrismaFilter } from './prisma.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {})
  app.useGlobalFilters(new PrismaFilter())
  app.useGlobalInterceptors(new ErrorHandlingInterceptor())

  const swaggerConfig = new DocumentBuilder()
    .setTitle('MotorPlus')
    .setDescription('Motorplus documentation')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('docs', app, document)

  await app.listen(8000)
}
bootstrap()
