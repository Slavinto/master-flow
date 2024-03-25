/*
  Warnings:

  - You are about to drop the column `category` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CategoryToPost` table. If the table is not empty, all the data it contains will be lost.

*/

-- DropTable
DROP TABLE IF EXISTS "Category" CASCADE;

-- DropTable
-- DROP TABLE IF EXISTS "_CategoryToPost" CASCADE;

-- CREATE TABLE "_CategoryToPost" (
--     "A" TEXT NOT NULL,
--     "B" TEXT NOT NULL
-- );
-- DROP TYPE IF EXISTS "Category" CASCADE;

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Products', 'Marketing', 'Strategy', 'Minimalism', 'Agency', 'Website');

-- DropForeignKey
-- ALTER TABLE "_CategoryToPost" DROP CONSTRAINT "_CategoryToPost_A_fkey";

-- DropForeignKey
-- ALTER TABLE "_CategoryToPost" DROP CONSTRAINT "_CategoryToPost_B_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "category",
ADD COLUMN     "categories" "Category"[],
ALTER COLUMN "postUrl" DROP NOT NULL,
ALTER COLUMN "imgUrl" DROP NOT NULL;
