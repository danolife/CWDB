import { defineConfig } from 'drizzle-kit';
import { serverEnv } from '@/domains/config/env.ts';

export default defineConfig({
  out: './drizzle',
  schema: './src/domains/db/schema.ts',
  dialect: 'postgresql',
  casing: 'snake_case',
  dbCredentials: {
    url: serverEnv.DATABASE_URL,
  },
});
