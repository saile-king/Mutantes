import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MutantesController } from './mutantes/controllers/mutantes/mutantes.controller';
import { MutantesModule } from './mutantes/mutantes.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [MutantesModule, DatabaseModule],
  controllers: [AppController, MutantesController],
  providers: [AppService],
})
export class AppModule {}
