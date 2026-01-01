import { createTRPCRouter } from './init.ts';
import { todosRouter } from '@/domains/trpc/routers/todosRouter.ts';

export const trpcRouter = createTRPCRouter({
  todos: todosRouter,
});
export type TRPCRouter = typeof trpcRouter;
