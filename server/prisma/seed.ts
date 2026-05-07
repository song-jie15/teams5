import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../dist/apps/server/libs/shared/src/generated/prisma/client';
import * as bcrypt from 'bcrypt';
import 'dotenv/config';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const hashedPassword = await bcrypt.hash('666666', 10);

  await prisma.user.upsert({
    where: { phone: '15930242416' },
    update: {},
    create: {
      name: '\u5b8b\u6d01',
      phone: '15930242416',
      password: hashedPassword,
      wordNumber: 0,
      dayNumber: 0,
    },
  });

  console.log('Seed completed');
}

main()
  .catch((e) => { console.error('Seed failed:', e); process.exit(1); })
  .finally(() => prisma['$disconnect']());
