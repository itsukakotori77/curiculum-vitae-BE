/*
  Warnings:

  - You are about to drop the column `cVSettingId` on the `curiculum_vitae` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `curiculum_vitae` DROP FOREIGN KEY `curiculum_vitae_cVSettingId_fkey`;

-- DropIndex
DROP INDEX `curiculum_vitae_cVSettingId_fkey` ON `curiculum_vitae`;

-- AlterTable
ALTER TABLE `curiculum_vitae` DROP COLUMN `cVSettingId`;

-- AddForeignKey
ALTER TABLE `curiculum_vitae` ADD CONSTRAINT `curiculum_vitae_cvitae_setting_id_fkey` FOREIGN KEY (`cvitae_setting_id`) REFERENCES `curiculum_vitae_setting`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
