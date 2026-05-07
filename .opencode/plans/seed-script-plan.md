# Seed 脚本执行计划

## 目标
创建 `server/prisma/seed.ts`，将当前数据库中的所有数据同步到 seed 脚本，方便小组成员 `npx prisma db seed` 一键同步。

## 涉及的表
- User（用户）
- WordBook（单词）
- Course（课程）
- CourseRecord（课程记录）
- PaymentRecord（支付记录）
- WordBookRecord（单词操作记录）

## 改动文件清单

| 文件 | 操作 |
|------|------|
| `server/prisma/seed.ts` | 新建 - Seed 脚本 |
| `server/package.json` | 修改 - 添加 `prisma:seed` script + `prisma.seed` 配置 |

## 步骤
1. 创建 `server/prisma/seed.ts`，写入所有数据的 insert/upsert 逻辑
2. 修改 `server/package.json`，添加：
   - `scripts.prisma:seed = "npx ts-node prisma/seed.ts"`
   - `prisma.seed = "npx ts-node prisma/seed.ts"`
3. 编译验证
4. 测试运行 `npx prisma db seed`
