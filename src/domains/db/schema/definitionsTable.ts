import { index, pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { wordsTable } from '@/domains/db/schema/wordsTable.ts';

export const definitionsTable = pgTable(
  'definitions',
  {
    id: uuid().primaryKey().defaultRandom(),
    word: text()
      .notNull()
      .references(() => wordsTable.word),
    definition: text().notNull(),
  },
  (table) => [index().on(table.word)],
);
