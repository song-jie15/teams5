const { PrismaPg } = require("@prisma/adapter-pg");
const { PrismaClient } = require("../libs/shared/src/generated/prisma/client");
const bcrypt = require("bcryptjs");
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

async function main() {
  console.log("连接数据库...");
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
  const prisma = new PrismaClient({ adapter });

  await prisma.$connect();
  console.log("数据库连接成功");

  const hashedPassword = await bcrypt.hash("666666", 10);

  await prisma.user.upsert({
    where: { phone: "15930242416" },
    update: {},
    create: {
      name: "\u5F20\u6770",
      phone: "15930242416",
      password: hashedPassword,
      wordNumber: 0,
      dayNumber: 0,
    },
  });
  console.log("用户 seed 完成");

  // Also seed course data
  const courses = [
    { name: "高考单词", value: "gk", description: "覆盖高考大纲核心词汇", teacher: "小余同学", price: 100, url: "https://vuedemo123.oss-cn-beijing.aliyuncs.com/assets/gre.png" },
    { name: "中考单词", value: "zk", description: "紧扣中考考纲", teacher: "小满zs", price: 35, url: "https://vuedemo123.oss-cn-beijing.aliyuncs.com/assets/ielts.png" },
    { name: "托福词汇", value: "toefl", description: "托福听说读写高频词", teacher: "枫竹", price: 80000, url: "https://vuedemo123.oss-cn-beijing.aliyuncs.com/assets/ky.png" },
    { name: "雅思词汇", value: "ielts", description: "雅思考试常考词汇", teacher: "ouka", price: 7000, url: "https://vuedemo123.oss-cn-beijing.aliyuncs.com/assets/toefl.png" },
    { name: "大学英语六级单词", value: "cet6", description: "六级大纲词汇与真题高频词", teacher: "章政", price: 5, url: "https://vuedemo123.oss-cn-beijing.aliyuncs.com/assets/zk.png" },
  ];

  await prisma.course.deleteMany({});
  await prisma.course.createMany({ data: courses });
  console.log("课程 seed 完成");

  await prisma.$disconnect();
  console.log("全部 seed 完成！");
}

main().catch((e) => {
  console.error("Seed failed:", e);
  process.exit(1);
});
