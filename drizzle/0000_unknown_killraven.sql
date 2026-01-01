CREATE TABLE "words" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"word" text NOT NULL,
	"letter1" varchar(1),
	CONSTRAINT "words_word_unique" UNIQUE("word")
);
