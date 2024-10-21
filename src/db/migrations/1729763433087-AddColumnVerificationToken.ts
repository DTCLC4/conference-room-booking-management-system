import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnVerificationToken1729763433087 implements MigrationInterface {
    name = 'AddColumnVerificationToken1729763433087'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "verificationToken" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "verificationToken"`);
    }

}
