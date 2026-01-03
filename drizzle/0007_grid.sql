CREATE TYPE "public"."direction" AS ENUM('across', 'down');--> statement-breakpoint
CREATE TYPE "public"."position" AS ENUM('bottom', 'right');--> statement-breakpoint
CREATE TABLE "grid_definitions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"definition_id" uuid NOT NULL,
	"grid_id" uuid NOT NULL,
	"x" integer NOT NULL,
	"y" integer NOT NULL,
	"direction" "direction" NOT NULL,
	"position" "position" NOT NULL
);
--> statement-breakpoint
CREATE TABLE "grids" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"width" integer NOT NULL,
	"height" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "grid_definitions" ADD CONSTRAINT "grid_definitions_definition_id_definitions_id_fk" FOREIGN KEY ("definition_id") REFERENCES "public"."definitions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "grid_definitions" ADD CONSTRAINT "grid_definitions_grid_id_grids_id_fk" FOREIGN KEY ("grid_id") REFERENCES "public"."grids"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "grid_definitions_definition_id_index" ON "grid_definitions" USING btree ("definition_id");--> statement-breakpoint
CREATE INDEX "grid_definitions_grid_id_index" ON "grid_definitions" USING btree ("grid_id");