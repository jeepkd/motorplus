import * as omitDeep from 'omit-deep'
import { Observable, map } from 'rxjs'

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'

@Injectable()
export class OmitDeepInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map((o) => omitDeep(o, ['passwordHash'])))
  }
}
