/*
  Warnings:

  - You are about to drop the column `primaryColor` on the `curiculum_vitae_setting` table. All the data in the column will be lost.
  - You are about to drop the column `sidebarColor` on the `curiculum_vitae_setting` table. All the data in the column will be lost.
  - You are about to drop the column `skillColor` on the `curiculum_vitae_setting` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `curiculum_vitae_setting` DROP COLUMN `primaryColor`,
    DROP COLUMN `sidebarColor`,
    DROP COLUMN `skillColor`,
    ADD COLUMN `primary_color` VARCHAR(191) NULL,
    ADD COLUMN `sidebar_color` VARCHAR(191) NULL,
    ADD COLUMN `skill_color` VARCHAR(191) NULL;
