/*
  Warnings:

  - You are about to alter the column `A` on the `_cvitaetocvitaetemplate` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `BigInt`.
  - You are about to alter the column `B` on the `_cvitaetocvitaetemplate` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `BigInt`.
  - The primary key for the `curiculum_vitae` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `curiculum_vitae` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `BigInt`.
  - The primary key for the `curiculum_vitae_education` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `curiculum_vitae_education` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `BigInt`.
  - You are about to alter the column `cvitae_id` on the `curiculum_vitae_education` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `BigInt`.
  - The primary key for the `curiculum_vitae_experience` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `curiculum_vitae_experience` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `BigInt`.
  - You are about to alter the column `cvitae_id` on the `curiculum_vitae_experience` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `BigInt`.
  - The primary key for the `curiculum_vitae_skill` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `curiculum_vitae_skill` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `BigInt`.
  - You are about to alter the column `cvitae_id` on the `curiculum_vitae_skill` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `BigInt`.
  - The primary key for the `curiculum_vitae_template` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `curiculum_vitae_template` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `BigInt`.

*/
-- DropForeignKey
ALTER TABLE `_cvitaetocvitaetemplate` DROP FOREIGN KEY `_CVitaeToCVitaeTemplate_A_fkey`;

-- DropForeignKey
ALTER TABLE `_cvitaetocvitaetemplate` DROP FOREIGN KEY `_CVitaeToCVitaeTemplate_B_fkey`;

-- DropForeignKey
ALTER TABLE `curiculum_vitae_education` DROP FOREIGN KEY `curiculum_vitae_education_cvitae_id_fkey`;

-- DropForeignKey
ALTER TABLE `curiculum_vitae_experience` DROP FOREIGN KEY `curiculum_vitae_experience_cvitae_id_fkey`;

-- DropForeignKey
ALTER TABLE `curiculum_vitae_skill` DROP FOREIGN KEY `curiculum_vitae_skill_cvitae_id_fkey`;

-- DropIndex
DROP INDEX `curiculum_vitae_education_cvitae_id_fkey` ON `curiculum_vitae_education`;

-- DropIndex
DROP INDEX `curiculum_vitae_experience_cvitae_id_fkey` ON `curiculum_vitae_experience`;

-- DropIndex
DROP INDEX `curiculum_vitae_skill_cvitae_id_fkey` ON `curiculum_vitae_skill`;

-- AlterTable
ALTER TABLE `_cvitaetocvitaetemplate` MODIFY `A` BIGINT NOT NULL,
    MODIFY `B` BIGINT NOT NULL;

-- AlterTable
ALTER TABLE `curiculum_vitae` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `curiculum_vitae_education` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    MODIFY `cvitae_id` BIGINT NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `curiculum_vitae_experience` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    MODIFY `cvitae_id` BIGINT NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `curiculum_vitae_skill` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    MODIFY `cvitae_id` BIGINT NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `curiculum_vitae_template` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `curiculum_vitae_education` ADD CONSTRAINT `curiculum_vitae_education_cvitae_id_fkey` FOREIGN KEY (`cvitae_id`) REFERENCES `curiculum_vitae`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `curiculum_vitae_experience` ADD CONSTRAINT `curiculum_vitae_experience_cvitae_id_fkey` FOREIGN KEY (`cvitae_id`) REFERENCES `curiculum_vitae`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `curiculum_vitae_skill` ADD CONSTRAINT `curiculum_vitae_skill_cvitae_id_fkey` FOREIGN KEY (`cvitae_id`) REFERENCES `curiculum_vitae`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CVitaeToCVitaeTemplate` ADD CONSTRAINT `_CVitaeToCVitaeTemplate_A_fkey` FOREIGN KEY (`A`) REFERENCES `curiculum_vitae`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CVitaeToCVitaeTemplate` ADD CONSTRAINT `_CVitaeToCVitaeTemplate_B_fkey` FOREIGN KEY (`B`) REFERENCES `curiculum_vitae_template`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
