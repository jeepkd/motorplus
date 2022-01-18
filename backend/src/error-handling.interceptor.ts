import {
  CallHandler,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  NestInterceptor,
  NotFoundException,
} from '@nestjs/common'
import { Observable, catchError } from 'rxjs'

// TODO #1 Remove error patching to improve security

@Injectable()
export class ErrorHandlingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error.code == 'P2025') {
          throw new NotFoundException(error.message)
        } else {
          // throw new InternalServerErrorException(error.message)
          throw error
        }
      }),
    )
  }
}
