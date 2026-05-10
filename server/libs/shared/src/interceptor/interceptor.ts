import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

const transformBigInt = (obj: any) => {
  if (typeof obj === 'bigint') {
    return obj.toString();
  }
  if (Array.isArray(obj)) {
    return obj.map(transformBigInt);
  }
  if (obj !== null && typeof obj === 'object') {
    if (obj instanceof Date) {
      return obj;
    }
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [key, transformBigInt(value)])
    );
  }
  return obj;
};

@Injectable()
export class InterceptorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp()
    const request = ctx.getRequest()
    return next.handle().pipe(
      map((data) => {
        const ok = data?.success !== false
        return {
          timestamp: new Date().toISOString(),
          path: request.url,
          message: data?.message || (ok ? '请求成功' : '请求失败'),
          code: data?.code || (ok ? 200 : 500),
          success: ok,
          data: ok ? (transformBigInt(data?.data) ?? null) : null
        }
      })
    )
  }
}
