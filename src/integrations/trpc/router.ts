import { createTRPCRouter } from './init';
import { todosRouter } from '@/integrations/trpc/routers/todosRouter.ts';

export const trpcRouter = createTRPCRouter({
  todos: todosRouter,
});
export type TRPCRouter = typeof trpcRouter;
