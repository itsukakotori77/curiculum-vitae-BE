/*
  Warnings:

  - You are about to drop the `_cvitaetocvitaetemplate` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cvitae_id` to the `curiculum_vitae_template` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_cvitaetocvitaetemplate` DROP FOREIGN KEY `_CVitaeToCVitaeTemplate_A_fkey`;

-- DropForeignKey
ALTER TABLE `_cvitaetocvitaetemplate` DROP FOREIGN KEY `_CVitaeToCVitaeTemplate_B_fkey`;

-- AlterTable
ALTER TABLE `curiculum_vitae_template` ADD COLUMN `cvitae_id` BIGINT NOT NULL;

-- DropTable
DROP TABLE `_cvitaetocvitaetemplate`;

-- AddForeignKey
ALTER TABLE `curiculum_vitae_template` ADD CONSTRAINT `curiculum_vitae_template_cvitae_id_fkey` FOREIGN KEY (`cvitae_id`) REFERENCES `curiculum_vitae`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
