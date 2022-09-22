import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mutante } from 'src/mutantes/entities/mutante.entity';

@Global()
@Module({
  imports: [
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
})
export class DatabaseModule {}
