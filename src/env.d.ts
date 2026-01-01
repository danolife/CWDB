/* See https://tanstack.com/start/latest/docs/framework/react/guide/environment-variables#type-safety */

// Server-side environment variables
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly DATABASE_URL: string;
    }
  }
}
