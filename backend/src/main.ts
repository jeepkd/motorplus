import { AppModule } from './app.module'
import { ErrorHandlingInterceptor } from './error-handling.interceptor'
import { NestFactory } from '@nestjs/core'
import { PrismaFilter } from './prisma.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {})
  app.useGlobalFilters(new PrismaFilter())
  app.useGlobalInterceptors(new ErrorHandlingInterceptor())
  await app.listen(8000)
}
bootstrap()
