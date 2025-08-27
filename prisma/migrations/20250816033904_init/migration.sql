/*
  Warnings:

  - Added the required column `cvitae_setting_id` to the `curiculum_vitae` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `curiculum_vitae` ADD COLUMN `cVSettingId` BIGINT NULL,
    ADD COLUMN `cvitae_setting_id` BIGINT NOT NULL;

-- CreateTable
CREATE TABLE `curiculum_vitae_setting` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `primaryColor` VARCHAR(191) NULL,
    `sidebarColor` VARCHAR(191) NULL,
    `skillColor` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `curiculum_vitae` ADD CONSTRAINT `curiculum_vitae_cVSettingId_fkey` FOREIGN KEY (`cVSettingId`) REFERENCES `curiculum_vitae_setting`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
