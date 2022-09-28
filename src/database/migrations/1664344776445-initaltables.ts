import { MigrationInterface, QueryRunner } from "typeorm";

export class initaltables1664344776445 implements MigrationInterface {
    name = 'initaltables1664344776445'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`vehiculo\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`nombre\` varchar(100) NOT NULL,
                \`descripcion\` varchar(250) NULL,
                \`createAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updateAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`superpoder\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`nombre\` varchar(100) NOT NULL,
                \`createAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updateAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
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
            DROP TABLE \`superpoder\`
        `);
        await queryRunner.query(`
            DROP TABLE \`vehiculo\`
        `);
    }

}
