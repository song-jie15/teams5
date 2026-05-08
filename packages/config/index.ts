export const Config = {
    ports:{
        server:3000, // 服务端口
        ai:3001, // 人工智能端口
        web:8080, // 前端端口
    },
    jwt: {
    secret: 'test_secret_key_123', 
    expiresIn: '30d',
  },
}