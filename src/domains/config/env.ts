import dotenv from 'dotenv';
import { z } from 'zod';

// This shouldn't be necessary because tanstack-start is supposed to load env files
// File order comes from here: https://tanstack.com/start/latest/docs/framework/react/guide/environment-variables#file-hierarchy-loaded-in-order
dotenv.config({
  path: ['.env.local', '.env.production', '.env.development', '.env'],
});

const serverEnvSchema = z.object({
  DATABASE_URL: z.string(),
});

export const serverEnv = serverEnvSchema.parse(process.env);
