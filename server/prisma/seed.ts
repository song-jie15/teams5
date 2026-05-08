import { PrismaClient } from "../libs/shared/src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";  // 👈 必须加这个
import OSS from "ali-oss";
import * as fs from "fs";
import * as path from "path";
import 'dotenv/config'

console.log("=== 环境变量检查 ===");
console.log("OSS_REGION:", process.env.OSS_REGION);
console.log("OSS_ACCESS_KEY_ID:", process.env.OSS_ACCESS_KEY_ID ? "已配置" : "未配置");
console.log("OSS_BUCKET:", process.env.OSS_BUCKET);
console.log("DATABASE_URL:", process.env.DATABASE_URL ? "已配置" : "未配置");

const ossClient = new OSS({
  region: process.env.OSS_REGION!,
  accessKeyId: process.env.OSS_ACCESS_KEY_ID!,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET!,
  bucket: process.env.OSS_BUCKET!,
  secure: true
});

const data = [
  {
    name: '高考单词',
    value: 'gk',
    description: '覆盖高考大纲核心词汇，按考频与题型分类，助力考前冲刺提分。',
    teacher: '小余同学',
    price: 100,
    url: "https://vuedemo123.oss-cn-beijing.aliyuncs.com/assets/gre.png"
  },
  {
    name: '中考单词',
    value: 'zk',
    description: '紧扣中考考纲，初中三年词汇一站式掌握，打好英语基础。',
    teacher: '小满zs',
    price: 35,
    url: "https://vuedemo123.oss-cn-beijing.aliyuncs.com/assets/ielts.png"
  },
  {
    name: '托福词汇',
    value: 'toefl',
    description: '托福听说读写高频词 + 学术场景词汇，提升备考效率。',
    teacher: '枫竹',
    price: 80000,
    url: "https://vuedemo123.oss-cn-beijing.aliyuncs.com/assets/ky.png"
  },
  {
    name: '雅思词汇',
    value: 'ielts',
    description: '雅思考试常考词汇与同义替换，兼顾移民与留学需求。',
    teacher: 'ouka',
    price: 7000,
    url: "https://vuedemo123.oss-cn-beijing.aliyuncs.com/assets/toefl.png"
  },
  {
    name: '大学英语六级单词',
    value: 'cet6',
    description: '六级大纲词汇与真题高频词，配合阅读与写作场景记忆。',
    teacher: '章政',
    price: 5,
    url: "https://vuedemo123.oss-cn-beijing.aliyuncs.com/assets/zk.png"
  },
];

const main = async () => {
  console.log("\n=== 连接数据库 ===");

  // ✅ 正确写法（你项目必须这样写，不能改）
  const prisma = new PrismaClient({
    adapter: new PrismaPg({
      connectionString: process.env.DATABASE_URL!,
    }),
  });

  await prisma.$connect();
  console.log("✅ 数据库连接成功");

  await prisma.course.deleteMany({});
  console.log("✅ 旧数据已清空");

  await prisma.course.createMany({
    data: data,
  });
  console.log("🎉 所有课程数据成功插入数据库！");

  // Upload images to OSS
  console.log("\n=== 上传图片到阿里云OSS ===");
  const assetsDir = path.join(__dirname, "assets");

  if (fs.existsSync(assetsDir)) {
    const imageFiles = fs.readdirSync(assetsDir).filter(file =>
      ['.png', '.jpg', '.jpeg', '.gif', '.webp'].includes(path.extname(file).toLowerCase())
    );

    for (const file of imageFiles) {
      const filePath = path.join(assetsDir, file);
      const objectKey = `assets/${file}`;

      try {
        console.log(`📤 上传 ${file} 到 OSS...`);
        const fileContent = fs.readFileSync(filePath);
        await ossClient.put(objectKey, fileContent);
        console.log(`✅ ${file} 上传成功！`);
      } catch (error) {
        console.error(`❌ ${file} 上传失败:`, error.message);
      }
    }
    console.log("🎉 所有图片上传完成！");
  } else {
    console.log("⚠️  assets 目录不存在，跳过图片上传");
  }

  await prisma.$disconnect();
};

main().catch(console.error);