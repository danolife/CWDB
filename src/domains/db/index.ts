import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { serverEnv } from '@/domains/config/env.ts';

const pool = new Pool({
  connectionString: serverEnv.DATABASE_URL,
});
const db = drizzle({ client: pool });
