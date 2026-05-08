export const Config = {
    ports:{
        server:3000, // 服务端口
        ai:3001, // 人工智能端口
        web:8080, // 前端端口
    },
    jwt: {
<<<<<<< HEAD
        secret: process.env.JWT_SECRET || 'en-secret-key-2024',
        accessExpiresIn: 3600, // 1 hour
        refreshExpiresIn: 604800, // 7 days
    }
=======
    secret: 'test_secret_key_123', 
    expiresIn: '30d',
  },
>>>>>>> 4c73c8495d1a48659a6a13317d34d6ca4a2dc34a
}