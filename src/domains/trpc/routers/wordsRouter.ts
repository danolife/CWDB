import type { TRPCRouterRecord } from '@trpc/server';
import { publicProcedure } from '@/domains/trpc/init.ts';
import { z } from 'zod';
import { db } from '@/domains/db';
import { wordsTable } from '@/domains/db/schema.ts';
import { and, eq, sql } from 'drizzle-orm';

import { normalizePattern } from '@/lib/utils.ts';

export const wordsRouter = {
  pattern: publicProcedure
    .input(z.string().transform(normalizePattern))
    .query(({ input }) => {
      return db
        .select({
          word: wordsTable.word,
        })
        .from(wordsTable)
        .where(
          input.includes('*')
            ? and(
                eq(wordsTable.length, input.length),
                ...[...input].map((l, i) =>
                  l === '*'
                    ? undefined
                    : eq(sql.identifier('letter' + (i + 1)), l),
                ),
              )
            : eq(wordsTable.word, input),
        )
        .limit(10);
    }),
} satisfies TRPCRouterRecord;
