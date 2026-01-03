import { index, integer, pgTable, uuid, pgEnum } from 'drizzle-orm/pg-core';
import { definitionsTable } from '@/domains/db/schema/definitionsTable.ts';
import { gridsTable } from '@/domains/db/schema/gridsTable.ts';

export const DirectionEnum = pgEnum('direction', ['across', 'down']);
export const PositionEnum = pgEnum('position', ['bottom', 'right']);

export const gridDefinitionsTable = pgTable(
  'grid_definitions',
  {
    id: uuid().primaryKey().defaultRandom(),
    definitionId: uuid()
      .notNull()
      .references(() => definitionsTable.id),
    gridId: uuid()
      .notNull()
      .references(() => gridsTable.id, { onDelete: 'cascade' }),
    x: integer().notNull(),
    y: integer().notNull(),
    direction: DirectionEnum().notNull(),
    position: PositionEnum().notNull(),
  },
  (table) => [index().on(table.definitionId), index().on(table.gridId)],
);
