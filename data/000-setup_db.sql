DROP VIEW IF EXISTS "wage_gaps_view";

DROP TABLE IF EXISTS "wage_gaps";

DROP TABLE IF EXISTS "occupations";

DROP TABLE IF EXISTS "weekly_earnings";

CREATE TABLE "occupations" (
	"id" SERIAL PRIMARY KEY,
	"slug" varchar,
	"name" varchar,
	"parent_id" int,
	"parent_slug_denorm" varchar
);

CREATE TABLE "wage_gaps" (
	"id" SERIAL PRIMARY KEY,
	"occupation_id" int,
	"year" int,
	"all_median_weekly_earnings" int,
	"men_median_weekly_earnings" int,
	"women_median_weekly_earnings" int,
	"cents_to_dollar" int
);

CREATE TABLE "weekly_earnings" (
	"occupation" varchar,
	"slug" varchar,
	"parent" varchar,
	"total_number_workers" varchar,
	"median_weekly_earnings" varchar,
	"men_number_workers" varchar,
	"men_median_weekly_earnings" varchar,
	"women_number_workers" varchar,
	"women_median_weekly_earnings" varchar,
	"year" int
);

ALTER TABLE "occupations"
	ADD FOREIGN KEY ("parent_id") REFERENCES "occupations" ("id");

CREATE UNIQUE INDEX occupation_slugs_unique ON occupations (slug);

ALTER TABLE "wage_gaps"
	ADD FOREIGN KEY ("occupation_id") REFERENCES "occupations" ("id");

CREATE VIEW wage_gaps_view AS
SELECT
	o1.name,
	o1.slug,
	o2.name AS parent_name,
	wg.cents_to_dollar,
	wg.year
FROM
	occupations o1
	INNER JOIN occupations o2 ON o1.parent_id = o2.id
	INNER JOIN wage_gaps wg ON wg.occupation_id = o1.id
WHERE
	cents_to_dollar IS NOT NULL
ORDER BY
	cents_to_dollar DESC;