import { Injectable } from '@nestjs/common';
const Business = {
    SUCCESS: {
        code: 200,
        message: 'success',
    },
    ERROR: {
        code: 500,
        message: 'error',
    },
}
@Injectable()
export class ResponseService {
    success(data: any) {
        return {
            data,
            code: Business.SUCCESS.code,
            message: Business.SUCCESS.message,
            success: true,
            timestamp: new Date().toISOString(),
            path: '',
        }
    }
    error(data = null, message: string, code: number = Business.ERROR.code) {
        return {
            data,
            code,
            message: message || Business.ERROR.message,
            success: false,
            timestamp: new Date().toISOString(),
            path: '',
        }
    }
}
