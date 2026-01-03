CREATE TABLE "definitions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"word" text NOT NULL,
	"definition" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "words" DROP CONSTRAINT "words_word_unique";--> statement-breakpoint
ALTER TABLE "words" DROP COLUMN "id";
ALTER TABLE "words" ADD PRIMARY KEY ("word");--> statement-breakpoint
ALTER TABLE "definitions" ADD CONSTRAINT "definitions_word_words_word_fk" FOREIGN KEY ("word") REFERENCES "public"."words"("word") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "definitions_word_index" ON "definitions" USING btree ("word");--> statement-breakpoint
