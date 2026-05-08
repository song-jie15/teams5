export const Config = {
    ports:{
        server:3000, // 服务端口
        ai:3001, // 人工智能端口
        web:8080, // 前端端口
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'en-secret-key-2024',
        accessExpiresIn: 3600, // 1 hour
        refreshExpiresIn: 604800, // 7 days
    }
}