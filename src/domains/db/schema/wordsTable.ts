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
        (): SQL => sql`LENGTH(${wordsTable.word})`,
      ),
    letter1: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`SUBSTRING(${wordsTable.word}, 1, 1)`,
    ),
    letter2: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN LENGTH(${wordsTable.word}) >= 2 THEN SUBSTRING(${wordsTable.word}, 2, 1) ELSE NULL END`,
    ),
    letter3: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN LENGTH(${wordsTable.word}) >= 3 THEN SUBSTRING(${wordsTable.word}, 3, 1) ELSE NULL END`,
    ),
    letter4: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN LENGTH(${wordsTable.word}) >= 4 THEN SUBSTRING(${wordsTable.word}, 4, 1) ELSE NULL END`,
    ),
    letter5: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN LENGTH(${wordsTable.word}) >= 5 THEN SUBSTRING(${wordsTable.word}, 5, 1) ELSE NULL END`,
    ),
    letter6: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN LENGTH(${wordsTable.word}) >= 6 THEN SUBSTRING(${wordsTable.word}, 6, 1) ELSE NULL END`,
    ),
    letter7: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN LENGTH(${wordsTable.word}) >= 7 THEN SUBSTRING(${wordsTable.word}, 7, 1) ELSE NULL END`,
    ),
    letter8: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN LENGTH(${wordsTable.word}) >= 8 THEN SUBSTRING(${wordsTable.word}, 8, 1) ELSE NULL END`,
    ),
    letter9: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN LENGTH(${wordsTable.word}) >= 9 THEN SUBSTRING(${wordsTable.word}, 9, 1) ELSE NULL END`,
    ),
    letter10: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN LENGTH(${wordsTable.word}) >= 10 THEN SUBSTRING(${wordsTable.word}, 10, 1) ELSE NULL END`,
    ),
    letter11: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN LENGTH(${wordsTable.word}) >= 11 THEN SUBSTRING(${wordsTable.word}, 11, 1) ELSE NULL END`,
    ),
    letter12: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN LENGTH(${wordsTable.word}) >= 12 THEN SUBSTRING(${wordsTable.word}, 12, 1) ELSE NULL END`,
    ),
    letter13: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN LENGTH(${wordsTable.word}) >= 13 THEN SUBSTRING(${wordsTable.word}, 13, 1) ELSE NULL END`,
    ),
    letter14: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN LENGTH(${wordsTable.word}) >= 14 THEN SUBSTRING(${wordsTable.word}, 14, 1) ELSE NULL END`,
    ),
    letter15: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN LENGTH(${wordsTable.word}) >= 15 THEN SUBSTRING(${wordsTable.word}, 15, 1) ELSE NULL END`,
    ),
    letter16: varchar({ length: 1 }).generatedAlwaysAs(
      (): SQL =>
        sql`CASE WHEN LENGTH(${wordsTable.word}) >= 16 THEN SUBSTRING(${wordsTable.word}, 16, 1) ELSE NULL END`,
    ),
  } as any,
  (table) => [
    index().on(table.length),
    index().on(table.letter1),
    index().on(table.letter2).where(sql.raw('"length" >= 2')),
    index().on(table.letter3).where(sql.raw('"length" >= 3')),
    index().on(table.letter4).where(sql.raw('"length" >= 4')),
    index().on(table.letter5).where(sql.raw('"length" >= 5')),
    index().on(table.letter6).where(sql.raw('"length" >= 6')),
    index().on(table.letter7).where(sql.raw('"length" >= 7')),
    index().on(table.letter8).where(sql.raw('"length" >= 8')),
    index().on(table.letter9).where(sql.raw('"length" >= 9')),
    index().on(table.letter10).where(sql.raw('"length" >= 10')),
    index().on(table.letter11).where(sql.raw('"length" >= 11')),
    index().on(table.letter12).where(sql.raw('"length" >= 12')),
    index().on(table.letter13).where(sql.raw('"length" >= 13')),
    index().on(table.letter14).where(sql.raw('"length" >= 14')),
    index().on(table.letter15).where(sql.raw('"length" >= 15')),
    index().on(table.letter16).where(sql.raw('"length" >= 16')),
  ],
);
