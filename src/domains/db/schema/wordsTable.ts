import { pgTable, text, uuid, varchar } from 'drizzle-orm/pg-core';

export const wordsTable = pgTable('words', {
  id: uuid().primaryKey().defaultRandom(),
  word: text().unique().notNull(),
  letter1: varchar({ length: 1 }),
});
