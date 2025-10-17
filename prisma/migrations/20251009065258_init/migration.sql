/*
  Warnings:

  - You are about to drop the column `isUsingPhoto` on the `curiculum_vitae_setting` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `curiculum_vitae_setting` DROP COLUMN `isUsingPhoto`,
    ADD COLUMN `is_using_photo` INTEGER NULL;
