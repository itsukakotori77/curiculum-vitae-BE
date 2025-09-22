-- CreateTable
CREATE TABLE `file_curr` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `cvtae_id` BIGINT NOT NULL,
    `file_id` BIGINT NOT NULL,

    UNIQUE INDEX `file_curr_cvtae_id_file_id_key`(`cvtae_id`, `file_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `file_curr` ADD CONSTRAINT `file_curr_cvtae_id_fkey` FOREIGN KEY (`cvtae_id`) REFERENCES `curiculum_vitae`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `file_curr` ADD CONSTRAINT `file_curr_file_id_fkey` FOREIGN KEY (`file_id`) REFERENCES `file_item`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
