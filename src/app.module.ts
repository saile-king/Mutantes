import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MutantesController } from './mutantes/controllers/mutantes/mutantes.controller';
import { Mutante } from './mutantes/entities/mutante.entity';
import { MutantesModule } from './mutantes/mutantes.module';

@Module({
  imports: [
    MutantesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'mutante',
      entities: [Mutante],
      synchronize: true,
    }),
  ],
  controllers: [AppController, MutantesController],
  providers: [AppService],
})
export class AppModule {}
