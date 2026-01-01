DROP INDEX "words_letter2_index";--> statement-breakpoint
DROP INDEX "words_letter3_index";--> statement-breakpoint
DROP INDEX "words_letter4_index";--> statement-breakpoint
DROP INDEX "words_letter5_index";--> statement-breakpoint
DROP INDEX "words_letter6_index";--> statement-breakpoint
DROP INDEX "words_letter7_index";--> statement-breakpoint
DROP INDEX "words_letter8_index";--> statement-breakpoint
DROP INDEX "words_letter9_index";--> statement-breakpoint
DROP INDEX "words_letter10_index";--> statement-breakpoint
DROP INDEX "words_letter11_index";--> statement-breakpoint
DROP INDEX "words_letter12_index";--> statement-breakpoint
DROP INDEX "words_letter13_index";--> statement-breakpoint
DROP INDEX "words_letter14_index";--> statement-breakpoint
DROP INDEX "words_letter15_index";--> statement-breakpoint
DROP INDEX "words_letter16_index";--> statement-breakpoint
ALTER TABLE "words" drop column "length";--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "length" integer GENERATED ALWAYS AS (LENGTH("words"."word")) STORED NOT NULL;--> statement-breakpoint
ALTER TABLE "words" drop column "letter1";--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter1" varchar(1) GENERATED ALWAYS AS (SUBSTRING("words"."word", 1, 1)) STORED;--> statement-breakpoint
ALTER TABLE "words" drop column "letter2";--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter2" varchar(1) GENERATED ALWAYS AS (CASE WHEN LENGTH("words"."word") >= 2 THEN SUBSTRING("words"."word", 2, 1) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" drop column "letter3";--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter3" varchar(1) GENERATED ALWAYS AS (CASE WHEN LENGTH("words"."word") >= 3 THEN SUBSTRING("words"."word", 3, 1) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" drop column "letter4";--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter4" varchar(1) GENERATED ALWAYS AS (CASE WHEN LENGTH("words"."word") >= 4 THEN SUBSTRING("words"."word", 4, 1) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" drop column "letter5";--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter5" varchar(1) GENERATED ALWAYS AS (CASE WHEN LENGTH("words"."word") >= 5 THEN SUBSTRING("words"."word", 5, 1) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" drop column "letter6";--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter6" varchar(1) GENERATED ALWAYS AS (CASE WHEN LENGTH("words"."word") >= 6 THEN SUBSTRING("words"."word", 6, 1) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" drop column "letter7";--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter7" varchar(1) GENERATED ALWAYS AS (CASE WHEN LENGTH("words"."word") >= 7 THEN SUBSTRING("words"."word", 7, 1) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" drop column "letter8";--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter8" varchar(1) GENERATED ALWAYS AS (CASE WHEN LENGTH("words"."word") >= 8 THEN SUBSTRING("words"."word", 8, 1) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" drop column "letter9";--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter9" varchar(1) GENERATED ALWAYS AS (CASE WHEN LENGTH("words"."word") >= 9 THEN SUBSTRING("words"."word", 9, 1) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" drop column "letter10";--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter10" varchar(1) GENERATED ALWAYS AS (CASE WHEN LENGTH("words"."word") >= 10 THEN SUBSTRING("words"."word", 10, 1) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" drop column "letter11";--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter11" varchar(1) GENERATED ALWAYS AS (CASE WHEN LENGTH("words"."word") >= 11 THEN SUBSTRING("words"."word", 11, 1) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" drop column "letter12";--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter12" varchar(1) GENERATED ALWAYS AS (CASE WHEN LENGTH("words"."word") >= 12 THEN SUBSTRING("words"."word", 12, 1) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" drop column "letter13";--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter13" varchar(1) GENERATED ALWAYS AS (CASE WHEN LENGTH("words"."word") >= 13 THEN SUBSTRING("words"."word", 13, 1) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" drop column "letter14";--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter14" varchar(1) GENERATED ALWAYS AS (CASE WHEN LENGTH("words"."word") >= 14 THEN SUBSTRING("words"."word", 14, 1) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" drop column "letter15";--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter15" varchar(1) GENERATED ALWAYS AS (CASE WHEN LENGTH("words"."word") >= 15 THEN SUBSTRING("words"."word", 15, 1) ELSE NULL END) STORED;--> statement-breakpoint
ALTER TABLE "words" drop column "letter16";--> statement-breakpoint
ALTER TABLE "words" ADD COLUMN "letter16" varchar(1) GENERATED ALWAYS AS (CASE WHEN LENGTH("words"."word") >= 16 THEN SUBSTRING("words"."word", 16, 1) ELSE NULL END) STORED;--> statement-breakpoint
CREATE INDEX "words_length_index" ON "words" USING btree ("length");--> statement-breakpoint
CREATE INDEX "words_letter2_index" ON "words" USING btree ("letter2") WHERE "length" >= 2;--> statement-breakpoint
CREATE INDEX "words_letter3_index" ON "words" USING btree ("letter3") WHERE "length" >= 3;--> statement-breakpoint
CREATE INDEX "words_letter4_index" ON "words" USING btree ("letter4") WHERE "length" >= 4;--> statement-breakpoint
CREATE INDEX "words_letter5_index" ON "words" USING btree ("letter5") WHERE "length" >= 5;--> statement-breakpoint
CREATE INDEX "words_letter6_index" ON "words" USING btree ("letter6") WHERE "length" >= 6;--> statement-breakpoint
CREATE INDEX "words_letter7_index" ON "words" USING btree ("letter7") WHERE "length" >= 7;--> statement-breakpoint
CREATE INDEX "words_letter8_index" ON "words" USING btree ("letter8") WHERE "length" >= 8;--> statement-breakpoint
CREATE INDEX "words_letter9_index" ON "words" USING btree ("letter9") WHERE "length" >= 9;--> statement-breakpoint
CREATE INDEX "words_letter10_index" ON "words" USING btree ("letter10") WHERE "length" >= 10;--> statement-breakpoint
CREATE INDEX "words_letter11_index" ON "words" USING btree ("letter11") WHERE "length" >= 11;--> statement-breakpoint
CREATE INDEX "words_letter12_index" ON "words" USING btree ("letter12") WHERE "length" >= 12;--> statement-breakpoint
CREATE INDEX "words_letter13_index" ON "words" USING btree ("letter13") WHERE "length" >= 13;--> statement-breakpoint
CREATE INDEX "words_letter14_index" ON "words" USING btree ("letter14") WHERE "length" >= 14;--> statement-breakpoint
CREATE INDEX "words_letter15_index" ON "words" USING btree ("letter15") WHERE "length" >= 15;--> statement-breakpoint
CREATE INDEX "words_letter16_index" ON "words" USING btree ("letter16") WHERE "length" >= 16;--> statement-breakpoint

CREATE OR REPLACE FUNCTION normalize_word()
  RETURNS TRIGGER AS $$
BEGIN
  NEW.word = UPPER(IMMUTABLE_UNACCENT(NEW.word));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER normalize_word_trigger
  BEFORE INSERT OR UPDATE ON words
  FOR EACH ROW
EXECUTE FUNCTION normalize_word();
