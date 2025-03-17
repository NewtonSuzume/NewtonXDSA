-- CreateTable
CREATE TABLE `User` (
    `key` INTEGER NOT NULL AUTO_INCREMENT,
    `fname` VARCHAR(191) NOT NULL,
    `lname` VARCHAR(191) NOT NULL,
    `uname` VARCHAR(191) NOT NULL,
    `pass` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_key_key`(`key`),
    PRIMARY KEY (`key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Event` (
    `key` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `type` ENUM('DISTRICT', 'REGIONAL', 'WORLD', 'SCRIMMAGE', 'OTHER') NOT NULL DEFAULT 'DISTRICT',
    `start_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NOT NULL,
    `updated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `created` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Event_key_key`(`key`),
    PRIMARY KEY (`key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Match` (
    `key` VARCHAR(191) NOT NULL,
    `eventId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Match_key_key`(`key`),
    PRIMARY KEY (`key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Schedule` (
    `key` INTEGER NOT NULL AUTO_INCREMENT,
    `uname` VARCHAR(191) NOT NULL,
    `position` INTEGER NOT NULL,
    `matchId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Schedule_key_key`(`key`),
    PRIMARY KEY (`key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Alliance` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `eventId` VARCHAR(191) NOT NULL,
    `matchId` VARCHAR(191) NOT NULL,
    `color` ENUM('BLUE', 'RED') NOT NULL,
    `matchColor` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Alliance_id_key`(`id`),
    UNIQUE INDEX `Alliance_matchColor_key`(`matchColor`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Team` (
    `tba_key` VARCHAR(191) NOT NULL,
    `team_number` INTEGER NOT NULL,
    `nickname` VARCHAR(191) NOT NULL,
    `logo` LONGTEXT NULL,

    UNIQUE INDEX `Team_tba_key_key`(`tba_key`),
    UNIQUE INDEX `Team_team_number_key`(`team_number`),
    PRIMARY KEY (`tba_key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MatchEntry` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `match_num` INTEGER NOT NULL,
    `team_number` INTEGER NOT NULL,
    `a_spkr_cnt` INTEGER NOT NULL,
    `a_amp_cnt` INTEGER NOT NULL,
    `a_spkr_miss` INTEGER NOT NULL,
    `a_amp_miss` INTEGER NOT NULL,
    `a_left_start` BOOLEAN NOT NULL,
    `t_spkr_cnt` INTEGER NOT NULL,
    `t_amp_cnt` INTEGER NOT NULL,
    `t_spkr_miss` INTEGER NOT NULL,
    `t_amp_miss` INTEGER NOT NULL,
    `t_hang` BOOLEAN NOT NULL,
    `t_hang_posit` INTEGER NOT NULL,
    `t_shot_location` INTEGER NOT NULL,
    `t_melody` BOOLEAN NOT NULL,
    `t_harmony` INTEGER NOT NULL,
    `t_coop` BOOLEAN NOT NULL,
    `t_ensemble` BOOLEAN NOT NULL,
    `t_spotlight` BOOLEAN NOT NULL,
    `spkr_acc` INTEGER NOT NULL,
    `amp_acc` INTEGER NOT NULL,
    `trap_acc` INTEGER NOT NULL,
    `start_posit` INTEGER NOT NULL,
    `driver_perf` INTEGER NOT NULL,
    `tippiness` INTEGER NOT NULL,
    `failed` BOOLEAN NOT NULL,
    `comments` VARCHAR(191) NOT NULL,
    `updated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `MatchEntry_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PitEntry` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `team_number` INTEGER NOT NULL,
    `drive_type` INTEGER NOT NULL,
    `auto_pts` INTEGER NOT NULL,
    `hang_cap` BOOLEAN NOT NULL,
    `trap_cap` BOOLEAN NOT NULL,
    `gp_level` INTEGER NOT NULL,
    `comments` VARCHAR(191) NOT NULL,
    `mercy` BOOLEAN NOT NULL DEFAULT false,
    `event_key` VARCHAR(191) NOT NULL,
    `updated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `PitEntry_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_EventToTeam` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_EventToTeam_AB_unique`(`A`, `B`),
    INDEX `_EventToTeam_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AllianceToTeam` (
    `A` INTEGER NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_AllianceToTeam_AB_unique`(`A`, `B`),
    INDEX `_AllianceToTeam_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Match` ADD CONSTRAINT `Match_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `Event`(`key`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_matchId_fkey` FOREIGN KEY (`matchId`) REFERENCES `Match`(`key`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alliance` ADD CONSTRAINT `Alliance_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `Event`(`key`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alliance` ADD CONSTRAINT `Alliance_matchId_fkey` FOREIGN KEY (`matchId`) REFERENCES `Match`(`key`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MatchEntry` ADD CONSTRAINT `MatchEntry_team_number_fkey` FOREIGN KEY (`team_number`) REFERENCES `Team`(`team_number`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PitEntry` ADD CONSTRAINT `PitEntry_team_number_fkey` FOREIGN KEY (`team_number`) REFERENCES `Team`(`team_number`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PitEntry` ADD CONSTRAINT `PitEntry_event_key_fkey` FOREIGN KEY (`event_key`) REFERENCES `Event`(`key`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EventToTeam` ADD CONSTRAINT `_EventToTeam_A_fkey` FOREIGN KEY (`A`) REFERENCES `Event`(`key`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EventToTeam` ADD CONSTRAINT `_EventToTeam_B_fkey` FOREIGN KEY (`B`) REFERENCES `Team`(`tba_key`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AllianceToTeam` ADD CONSTRAINT `_AllianceToTeam_A_fkey` FOREIGN KEY (`A`) REFERENCES `Alliance`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AllianceToTeam` ADD CONSTRAINT `_AllianceToTeam_B_fkey` FOREIGN KEY (`B`) REFERENCES `Team`(`tba_key`) ON DELETE CASCADE ON UPDATE CASCADE;
