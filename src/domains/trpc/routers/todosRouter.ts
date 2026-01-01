import type { TRPCRouterRecord } from '@trpc/server';
import { publicProcedure } from '@/domains/trpc/init.ts';
import { z } from 'zod';
import { db } from '@/domains/db';
import { wordsTable } from '@/domains/db/schema.ts';
import { and, eq, sql } from 'drizzle-orm';

const todos = [
  { id: 1, name: 'Get groceries' },
  { id: 2, name: 'Buy a new phone' },
  { id: 3, name: 'Finish the project' },
];

export const todosRouter = {
  list: publicProcedure.input(z.string()).query(({ input }) => {
    return db
      .select({
        id: wordsTable.id,
        word: wordsTable.word,
      })
      .from(wordsTable)
      .where(
        input.includes('*')
          ? and(
              eq(wordsTable.length, input.length),
              ...[...input.toUpperCase()].map((l, i) =>
                l === '*'
                  ? undefined
                  : eq(sql.identifier('letter' + (i + 1)), l),
              ),
            )
          : eq(wordsTable.word, input),
      )
      .limit(10);
  }),
  add: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(({ input }) => {
      const newTodo = { id: todos.length + 1, name: input.name };
      todos.push(newTodo);
      return newTodo;
    }),
} satisfies TRPCRouterRecord;
