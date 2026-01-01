import {
  index,
  integer,
  pgTable,
  text,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import type { SQL } from 'drizzle-orm';

export const wordsTable = pgTable(
  'words',
  {
    id: uuid().primaryKey().defaultRandom(),
    word: text().unique().notNull(),
    length: integer()
      .notNull()
      .generatedAlwaysAs(
        (): SQL => sql`LENGTH(IMMUTABLE_UNACCENT(${wordsTable.word}))`,
      ),
    letter1: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN SUBSTRING(${wordsTable.word}, 1, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING(${wordsTable.word}, 1, 1))) ELSE NULL END`,
    ),
    letter2: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN SUBSTRING(${wordsTable.word}, 2, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING(${wordsTable.word}, 2, 1))) ELSE NULL END`,
    ),
    letter3: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN SUBSTRING(${wordsTable.word}, 3, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING(${wordsTable.word}, 3, 1))) ELSE NULL END`,
    ),
    letter4: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN SUBSTRING(${wordsTable.word}, 4, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING(${wordsTable.word}, 4, 1))) ELSE NULL END`,
    ),
    letter5: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN SUBSTRING(${wordsTable.word}, 5, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING(${wordsTable.word}, 5, 1))) ELSE NULL END`,
    ),
    letter6: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN SUBSTRING(${wordsTable.word}, 6, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING(${wordsTable.word}, 6, 1))) ELSE NULL END`,
    ),
    letter7: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN SUBSTRING(${wordsTable.word}, 7, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING(${wordsTable.word}, 7, 1))) ELSE NULL END`,
    ),
    letter8: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN SUBSTRING(${wordsTable.word}, 8, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING(${wordsTable.word}, 8, 1))) ELSE NULL END`,
    ),
    letter9: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN SUBSTRING(${wordsTable.word}, 9, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING(${wordsTable.word}, 9, 1))) ELSE NULL END`,
    ),
    letter10: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN SUBSTRING(${wordsTable.word}, 10, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING(${wordsTable.word}, 10, 1))) ELSE NULL END`,
    ),
    letter11: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN SUBSTRING(${wordsTable.word}, 11, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING(${wordsTable.word}, 11, 1))) ELSE NULL END`,
    ),
    letter12: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN SUBSTRING(${wordsTable.word}, 12, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING(${wordsTable.word}, 12, 1))) ELSE NULL END`,
    ),
    letter13: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN SUBSTRING(${wordsTable.word}, 13, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING(${wordsTable.word}, 13, 1))) ELSE NULL END`,
    ),
    letter14: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN SUBSTRING(${wordsTable.word}, 14, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING(${wordsTable.word}, 14, 1))) ELSE NULL END`,
    ),
    letter15: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN SUBSTRING(${wordsTable.word}, 15, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING(${wordsTable.word}, 15, 1))) ELSE NULL END`,
    ),
    letter16: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN SUBSTRING(${wordsTable.word}, 16, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING(${wordsTable.word}, 16, 1))) ELSE NULL END`,
    ),
  } as any,
  (table) => [
    index().on(table.letter1),
    index().on(table.letter2),
    index().on(table.letter3),
    index().on(table.letter4),
    index().on(table.letter5),
    index().on(table.letter6),
    index().on(table.letter7),
    index().on(table.letter8),
    index().on(table.letter9),
    index().on(table.letter10),
    index().on(table.letter11),
    index().on(table.letter12),
    index().on(table.letter13),
    index().on(table.letter14),
    index().on(table.letter15),
    index().on(table.letter16),
  ],
);
