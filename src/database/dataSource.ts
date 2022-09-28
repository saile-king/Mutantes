/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
  type: 'mysql',
  host: 'b4vedjdpxyxv0m7jpvx0-mysql.services.clever-cloud.com',
  port: 3306,
  username: 'ulnmhbzpdurup0ug',
  password: '1vBP8t0jvjijh1aCZImX',
  database: 'b4vedjdpxyxv0m7jpvx0',
  logging: true,
  synchronize: false,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
});
