/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MutantesController } from './mutantes/controllers/mutantes.controller';
import { MutantesModule } from './mutantes/mutantes.module';
import { DatabaseModule } from './database/database.module';
import { environment } from './environments';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environment[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        HOST: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
        DATABASE_USERNAME: Joi.string().required(),
        //DATABASE_PASSWORD: Joi.string().required(),
      }),
    }),
    MutantesModule,
    DatabaseModule,
  ],
  controllers: [AppController, MutantesController,],
  providers: [AppService],
})
export class AppModule {}
