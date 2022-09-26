/* eslint-disable prettier/prettier */
import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mutante } from 'src/mutantes/entities/mutante.entity';
import { Superpoder } from 'src/mutantes/entities/superpoder.entity';
import config from '../config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { username, host, db_name, password, port } = configService.mysql;
        return {
          type: 'mysql',
          host,
          port,
          username,
          password,
          database: db_name,
          synchronize: false,
          autoLoadEntities: true,
        };
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
