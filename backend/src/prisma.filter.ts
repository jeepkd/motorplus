import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common'

import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { Response } from 'express'

@Catch(PrismaClientKnownRequestError)
export class PrismaFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()

    response.status(500).json({
      statusCode: exception.code,
      message: exception.message,
    })
  }
}
