import { config } from 'dotenv';
config();

export const {
  URL,
  PORT,
  DB_DIALECT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
} = process.env as Record<string, string>;