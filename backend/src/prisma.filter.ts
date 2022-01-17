import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  NotFoundException,
} from '@nestjs/common'
import { Request, Response } from 'express'

import { PrismaClientKnownRequestError } from '@prisma/client/runtime'

@Catch(PrismaClientKnownRequestError)
export class PrismaFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()

    response.status(500).json({
      statusCode: exception.code,
      message: decodeURI(exception.message),
    })
  }
}
