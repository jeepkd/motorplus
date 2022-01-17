import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  NotFoundException,
} from '@nestjs/common'
import { Observable, catchError } from 'rxjs'

import { PrismaClientKnownRequestError } from '@prisma/client/runtime'

@Injectable()
export class ErrorHandlingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error.code == 'P2025') {
          throw new NotFoundException(error.message)
        } else {
          throw error
        }
      }),
    )
  }
}
