import { integer, pgTable, uuid } from 'drizzle-orm/pg-core';

export const gridsTable = pgTable('grids', {
  id: uuid().primaryKey().defaultRandom(),
  width: integer().notNull(),
  height: integer().notNull(),
});
