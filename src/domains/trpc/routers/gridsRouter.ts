import type { TRPCRouterRecord } from '@trpc/server';
import { publicProcedure } from '@/domains/trpc/init.ts';
import { z } from 'zod';
import { db } from '@/domains/db';
import {
  definitionsTable,
  gridDefinitionsTable,
  gridsTable,
} from '@/domains/db/schema.ts';
import { eq } from 'drizzle-orm';

export const gridsRouter = {
  get: publicProcedure.input(z.uuid()).query(async ({ input }) => {
    const result = await db
      .select({
        id: gridsTable.id,
        width: gridsTable.width,
        height: gridsTable.height,
        definitions: {
          text: definitionsTable.definition,
          x: gridDefinitionsTable.x,
          y: gridDefinitionsTable.y,
          direction: gridDefinitionsTable.direction,
          position: gridDefinitionsTable.position,
        },
      })
      .from(gridsTable)
      .innerJoin(
        gridDefinitionsTable,
        eq(gridsTable.id, gridDefinitionsTable.gridId),
      )
      .innerJoin(
        definitionsTable,
        eq(definitionsTable.id, gridDefinitionsTable.definitionId),
      )
      .where(eq(gridsTable.id, input))
      .limit(1);

    if (result.length === 0) {
      throw new Error('Grid not found');
    }

    return {
      id: result[0].id,
      width: result[0].width,
      height: result[0].height,
      definitions: result.map((r) => ({
        text: r.definitions.text,
        x: r.definitions.x,
        y: r.definitions.y,
        direction: r.definitions.direction,
        position: r.definitions.position,
      })),
    };
  }),
} satisfies TRPCRouterRecord;
