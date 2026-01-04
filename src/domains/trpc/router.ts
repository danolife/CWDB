import { createTRPCRouter } from './init.ts';
import { wordsRouter } from '@/domains/trpc/routers/wordsRouter.ts';
import { gridsRouter } from '@/domains/trpc/routers/gridsRouter.ts';

export const trpcRouter = createTRPCRouter({
  words: wordsRouter,
  grids: gridsRouter,
});
export type TRPCRouter = typeof trpcRouter;
