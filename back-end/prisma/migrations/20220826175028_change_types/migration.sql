/*
  Warnings:

  - Changed the type of `click` on the `click_time` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `click_date` on the `click_time` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "click_time" DROP COLUMN "click",
ADD COLUMN     "click" INTEGER NOT NULL,
DROP COLUMN "click_date",
ADD COLUMN     "click_date" TIMESTAMP(3) NOT NULL;
