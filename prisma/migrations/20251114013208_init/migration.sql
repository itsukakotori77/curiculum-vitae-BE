/*
  Warnings:

  - You are about to drop the column `cvitae_id` on the `curiculum_vitae_template` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `curiculum_vitae_template` DROP FOREIGN KEY `curiculum_vitae_template_cvitae_id_fkey`;

-- DropIndex
DROP INDEX `curiculum_vitae_template_cvitae_id_fkey` ON `curiculum_vitae_template`;

-- AlterTable
ALTER TABLE `curiculum_vitae_template` DROP COLUMN `cvitae_id`;

-- CreateTable
CREATE TABLE `curiculum_vitae_on_template` (
    `cvitae_id` BIGINT NOT NULL,
    `cvitae_template_id` BIGINT NOT NULL,
    `assigned_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`cvitae_id`, `cvitae_template_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `curiculum_vitae_on_template` ADD CONSTRAINT `curiculum_vitae_on_template_cvitae_id_fkey` FOREIGN KEY (`cvitae_id`) REFERENCES `curiculum_vitae`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `curiculum_vitae_on_template` ADD CONSTRAINT `curiculum_vitae_on_template_cvitae_template_id_fkey` FOREIGN KEY (`cvitae_template_id`) REFERENCES `curiculum_vitae_template`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
