import { TRPCError, TRPCRouterRecord } from '@trpc/server';
import { publicProcedure } from '@/domains/trpc/init.ts';
import { z } from 'zod';
import { db } from '@/domains/db';
import { definitionsTable, wordsTable } from '@/domains/db/schema.ts';
import { and, eq, sql } from 'drizzle-orm';

import { normalizePattern } from '@/lib/utils.ts';

export const wordsRouter = {
  pattern: publicProcedure
    .input(z.preprocess(normalizePattern, z.string().regex(/^[A-Z*]+$/g)))
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
  get: publicProcedure
    .input(z.preprocess(normalizePattern, z.string().regex(/^[A-Z]+$/g)))
    .query(async ({ input }) => {
      const result = await db
        .select({
          word: wordsTable.word,
          definition: {
            id: definitionsTable.id,
            definition: definitionsTable.definition,
          },
        })
        .from(wordsTable)
        .leftJoin(definitionsTable, eq(definitionsTable.word, wordsTable.word))
        .where(eq(wordsTable.word, input))
        .limit(10);

      if (result.length === 0) {
        throw new TRPCError({
          code: 'NOT_FOUND',
        });
      }

      return {
        word: result[0].word,
        definitions: result
          .map((r) => r.definition)
          .filter((d): d is { id: string; definition: string } => d !== null),
      };
    }),
} satisfies TRPCRouterRecord;
