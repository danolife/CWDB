ALTER TABLE "words" drop column "letter1";--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter1" varchar(1) GENERATED ALWAYS AS (CASE WHEN SUBSTRING("words"."word", 1, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING("words"."word", 1, 1))) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "length" integer GENERATED ALWAYS AS (LENGTH(IMMUTABLE_UNACCENT("words"."word"))) STORED NOT NULL;--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter2" varchar(1) GENERATED ALWAYS AS (CASE WHEN SUBSTRING("words"."word", 2, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING("words"."word", 2, 1))) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter3" varchar(1) GENERATED ALWAYS AS (CASE WHEN SUBSTRING("words"."word", 3, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING("words"."word", 3, 1))) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter4" varchar(1) GENERATED ALWAYS AS (CASE WHEN SUBSTRING("words"."word", 4, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING("words"."word", 4, 1))) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter5" varchar(1) GENERATED ALWAYS AS (CASE WHEN SUBSTRING("words"."word", 5, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING("words"."word", 5, 1))) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter6" varchar(1) GENERATED ALWAYS AS (CASE WHEN SUBSTRING("words"."word", 6, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING("words"."word", 6, 1))) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter7" varchar(1) GENERATED ALWAYS AS (CASE WHEN SUBSTRING("words"."word", 7, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING("words"."word", 7, 1))) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter8" varchar(1) GENERATED ALWAYS AS (CASE WHEN SUBSTRING("words"."word", 8, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING("words"."word", 8, 1))) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter9" varchar(1) GENERATED ALWAYS AS (CASE WHEN SUBSTRING("words"."word", 9, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING("words"."word", 9, 1))) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter10" varchar(1) GENERATED ALWAYS AS (CASE WHEN SUBSTRING("words"."word", 10, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING("words"."word", 10, 1))) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter11" varchar(1) GENERATED ALWAYS AS (CASE WHEN SUBSTRING("words"."word", 11, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING("words"."word", 11, 1))) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter12" varchar(1) GENERATED ALWAYS AS (CASE WHEN SUBSTRING("words"."word", 12, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING("words"."word", 12, 1))) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter13" varchar(1) GENERATED ALWAYS AS (CASE WHEN SUBSTRING("words"."word", 13, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING("words"."word", 13, 1))) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter14" varchar(1) GENERATED ALWAYS AS (CASE WHEN SUBSTRING("words"."word", 14, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING("words"."word", 14, 1))) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter15" varchar(1) GENERATED ALWAYS AS (CASE WHEN SUBSTRING("words"."word", 15, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING("words"."word", 15, 1))) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter16" varchar(1) GENERATED ALWAYS AS (CASE WHEN SUBSTRING("words"."word", 16, 1) IS NOT NULL THEN IMMUTABLE_UNACCENT(UPPER(SUBSTRING("words"."word", 16, 1))) ELSE NULL END) STORED;--> statement-breakpoint
CREATE INDEX "words_letter1_index" ON "words" USING btree ("letter1");--> statement-breakpoint
CREATE INDEX "words_letter2_index" ON "words" USING btree ("letter2");--> statement-breakpoint
CREATE INDEX "words_letter3_index" ON "words" USING btree ("letter3");--> statement-breakpoint
CREATE INDEX "words_letter4_index" ON "words" USING btree ("letter4");--> statement-breakpoint
CREATE INDEX "words_letter5_index" ON "words" USING btree ("letter5");--> statement-breakpoint
CREATE INDEX "words_letter6_index" ON "words" USING btree ("letter6");--> statement-breakpoint
CREATE INDEX "words_letter7_index" ON "words" USING btree ("letter7");--> statement-breakpoint
CREATE INDEX "words_letter8_index" ON "words" USING btree ("letter8");--> statement-breakpoint
CREATE INDEX "words_letter9_index" ON "words" USING btree ("letter9");--> statement-breakpoint
CREATE INDEX "words_letter10_index" ON "words" USING btree ("letter10");--> statement-breakpoint
CREATE INDEX "words_letter11_index" ON "words" USING btree ("letter11");--> statement-breakpoint
CREATE INDEX "words_letter12_index" ON "words" USING btree ("letter12");--> statement-breakpoint
CREATE INDEX "words_letter13_index" ON "words" USING btree ("letter13");--> statement-breakpoint
CREATE INDEX "words_letter14_index" ON "words" USING btree ("letter14");--> statement-breakpoint
CREATE INDEX "words_letter15_index" ON "words" USING btree ("letter15");--> statement-breakpoint
CREATE INDEX "words_letter16_index" ON "words" USING btree ("letter16");