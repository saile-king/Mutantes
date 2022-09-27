import { MigrationInterface, QueryRunner } from "typeorm";

export class initaltables1664254743451 implements MigrationInterface {
    name = 'initaltables1664254743451'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`mutante\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`nombre\` varchar(100) NOT NULL,
                \`alter_ego\` varchar(100) NOT NULL,
                \`ciudad_operacion\` varchar(100) NOT NULL,
                \`condicion\` varchar(100) NOT NULL,
                \`imagen\` varchar(350) NOT NULL,
                \`grupo\` varchar(100) NOT NULL,
                \`createAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updateAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                UNIQUE INDEX \`IDX_0ba53ddf8dfe6d31f9639243f7\` (\`nombre\`),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`mutante_superpoderes_superpoder\` (
                \`mutanteId\` int NOT NULL,
                \`superpoderId\` int NOT NULL,
                INDEX \`IDX_102a1bff570d4e5032428bfe5e\` (\`mutanteId\`),
                INDEX \`IDX_4b633b68df341c71df6fc2da85\` (\`superpoderId\`),
                PRIMARY KEY (\`mutanteId\`, \`superpoderId\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`mutante_vehiculos_vehiculo\` (
                \`mutanteId\` int NOT NULL,
                \`vehiculoId\` int NOT NULL,
                INDEX \`IDX_aafdad0651f297a6895b5a504a\` (\`mutanteId\`),
                INDEX \`IDX_d5ddeaed055eaa776a49c71ec1\` (\`vehiculoId\`),
                PRIMARY KEY (\`mutanteId\`, \`vehiculoId\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            ALTER TABLE \`superpoder\`
            ADD \`createAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
        `);
        await queryRunner.query(`
            ALTER TABLE \`superpoder\`
            ADD \`updateAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
        `);
        await queryRunner.query(`
            ALTER TABLE \`vehiculo\`
            ADD \`createAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
        `);
        await queryRunner.query(`
            ALTER TABLE \`vehiculo\`
            ADD \`updateAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
        `);
        await queryRunner.query(`
            ALTER TABLE \`mutante_superpoderes_superpoder\`
            ADD CONSTRAINT \`FK_102a1bff570d4e5032428bfe5e3\` FOREIGN KEY (\`mutanteId\`) REFERENCES \`mutante\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE
        `);
        await queryRunner.query(`
            ALTER TABLE \`mutante_superpoderes_superpoder\`
            ADD CONSTRAINT \`FK_4b633b68df341c71df6fc2da856\` FOREIGN KEY (\`superpoderId\`) REFERENCES \`superpoder\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`mutante_vehiculos_vehiculo\`
            ADD CONSTRAINT \`FK_aafdad0651f297a6895b5a504a5\` FOREIGN KEY (\`mutanteId\`) REFERENCES \`mutante\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE
        `);
        await queryRunner.query(`
            ALTER TABLE \`mutante_vehiculos_vehiculo\`
            ADD CONSTRAINT \`FK_d5ddeaed055eaa776a49c71ec12\` FOREIGN KEY (\`vehiculoId\`) REFERENCES \`vehiculo\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`mutante_vehiculos_vehiculo\` DROP FOREIGN KEY \`FK_d5ddeaed055eaa776a49c71ec12\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`mutante_vehiculos_vehiculo\` DROP FOREIGN KEY \`FK_aafdad0651f297a6895b5a504a5\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`mutante_superpoderes_superpoder\` DROP FOREIGN KEY \`FK_4b633b68df341c71df6fc2da856\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`mutante_superpoderes_superpoder\` DROP FOREIGN KEY \`FK_102a1bff570d4e5032428bfe5e3\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`vehiculo\` DROP COLUMN \`updateAt\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`vehiculo\` DROP COLUMN \`createAt\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`superpoder\` DROP COLUMN \`updateAt\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`superpoder\` DROP COLUMN \`createAt\`
        `);
        await queryRunner.query(`
            DROP INDEX \`IDX_d5ddeaed055eaa776a49c71ec1\` ON \`mutante_vehiculos_vehiculo\`
        `);
        await queryRunner.query(`
            DROP INDEX \`IDX_aafdad0651f297a6895b5a504a\` ON \`mutante_vehiculos_vehiculo\`
        `);
        await queryRunner.query(`
            DROP TABLE \`mutante_vehiculos_vehiculo\`
        `);
        await queryRunner.query(`
            DROP INDEX \`IDX_4b633b68df341c71df6fc2da85\` ON \`mutante_superpoderes_superpoder\`
        `);
        await queryRunner.query(`
            DROP INDEX \`IDX_102a1bff570d4e5032428bfe5e\` ON \`mutante_superpoderes_superpoder\`
        `);
        await queryRunner.query(`
            DROP TABLE \`mutante_superpoderes_superpoder\`
        `);
        await queryRunner.query(`
            DROP INDEX \`IDX_0ba53ddf8dfe6d31f9639243f7\` ON \`mutante\`
        `);
        await queryRunner.query(`
            DROP TABLE \`mutante\`
        `);
    }

}
