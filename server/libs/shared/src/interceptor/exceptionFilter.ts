import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";

@Catch(HttpException)
export class InterceptorExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const request = ctx.getRequest()
        const response = ctx.getResponse()
        const exceptionResponse = exception.getResponse()
        let message: string
        if (typeof exceptionResponse === 'object' && exceptionResponse !== null) {
            const resp = exceptionResponse as any
            message = Array.isArray(resp.message) ? resp.message.join('; ') : (resp.message || exception.message)
        } else {
            message = typeof exceptionResponse === 'string' ? exceptionResponse : exception.message
        }
        response.status(exception.getStatus()).json({
            timestamp: new Date().toISOString(),
            path: request.url,
            message,
            code: exception.getStatus(),
            success: false
        })
    }
}