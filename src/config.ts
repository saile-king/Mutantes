/* eslint-disable prettier/prettier */
import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    mysql: {
      host: process.env.HOST,
      db_name: process.env.DATABASE_NAME,
      port: parseInt(process.env.DATEBASE_PORT, 10),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
    },
    mysql_docker: {
      host: process.env.MYSQL_HOST,
      db_name: process.env.MYSQL_DATABASE,
      port: parseInt(process.env.MYSQL_PORT, 10),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_ROOT_PASSWORD,
    },
    postgres: {
      host: process.env.POSTGRES_HOST,
      db_name: process.env.POSTGRES_DB,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
  };
});
