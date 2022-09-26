/* eslint-disable prettier/prettier */
import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mutante } from 'src/mutantes/entities/mutante.entity';
import config from '../config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { username, host, db_name, password, port } = configService.mysql_docker;
        return {
          type: 'mysql',
          host,
          port,
          username,
          password,
          database: db_name,
          entities: [Mutante],
          synchronize: true,
        };
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
