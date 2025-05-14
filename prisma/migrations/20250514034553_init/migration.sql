/*
  Warnings:

  - You are about to drop the column `createdAt` on the `curiculum_vitae` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `curiculum_vitae` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `curiculum_vitae_education` table. All the data in the column will be lost.
  - You are about to drop the column `end` on the `curiculum_vitae_education` table. All the data in the column will be lost.
  - You are about to drop the column `start` on the `curiculum_vitae_education` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `curiculum_vitae_education` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `curiculum_vitae_experience` table. All the data in the column will be lost.
  - You are about to drop the column `end` on the `curiculum_vitae_experience` table. All the data in the column will be lost.
  - You are about to drop the column `start` on the `curiculum_vitae_experience` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `curiculum_vitae_experience` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `curiculum_vitae_skill` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `curiculum_vitae_skill` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `curiculum_vitae_template` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `curiculum_vitae_template` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `user` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `curiculum_vitae` table without a default value. This is not possible if the table is not empty.
  - Added the required column `end_date` to the `curiculum_vitae_education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_date` to the `curiculum_vitae_education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `curiculum_vitae_education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `end_date` to the `curiculum_vitae_experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_date` to the `curiculum_vitae_experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `curiculum_vitae_experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `curiculum_vitae_skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `curiculum_vitae_template` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `curiculum_vitae` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `curiculum_vitae_education` DROP COLUMN `createdAt`,
    DROP COLUMN `end`,
    DROP COLUMN `start`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `end_date` DATETIME(3) NOT NULL,
    ADD COLUMN `start_date` DATETIME(3) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `curiculum_vitae_experience` DROP COLUMN `createdAt`,
    DROP COLUMN `end`,
    DROP COLUMN `start`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `end_date` DATETIME(3) NOT NULL,
    ADD COLUMN `start_date` DATETIME(3) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `curiculum_vitae_skill` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `curiculum_vitae_template` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;
