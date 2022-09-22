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
  };
});
