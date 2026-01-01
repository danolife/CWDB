import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config({ path: '.env.local' });

const serverEnvSchema = z.object({
  DATABASE_URL: z.string(),
});

export const serverEnv = serverEnvSchema.parse(process.env);
