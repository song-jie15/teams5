/*
  Warnings:

  - You are about to drop the column `isActive` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastLoginAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `RefreshToken` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RefreshToken" DROP CONSTRAINT "RefreshToken_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isActive",
DROP COLUMN "lastLoginAt",
DROP COLUMN "password";

-- DropTable
DROP TABLE "RefreshToken";
