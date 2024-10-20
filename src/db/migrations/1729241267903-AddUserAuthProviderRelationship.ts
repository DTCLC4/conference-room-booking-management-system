import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserAuthProviderRelationship1729241267903 implements MigrationInterface {
    name = 'AddUserAuthProviderRelationship1729241267903'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "auth_provider" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "auth_provider" ADD CONSTRAINT "FK_d9255ec09fddab3e47e84fd2a07" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "auth_provider" DROP CONSTRAINT "FK_d9255ec09fddab3e47e84fd2a07"`);
        await queryRunner.query(`ALTER TABLE "auth_provider" DROP COLUMN "userId"`);
    }

}
