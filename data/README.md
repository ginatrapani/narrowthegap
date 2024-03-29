# Narrow the Gap Data API

To experiment with the data set yourself, in a local, PostgreSQL database, run the `.sql` files in this directory in order. Here's [a DB Diagram of the tables you'll get](https://dbdiagram.io/d/5e95c0d239d18f5553fd946c).

Spin up [PostGraphile](https://www.graphile.org/postgraphile/) pointing at that database, and run the GraphQL query in the `gql` folder.

TODO: Automate this process.

---

## Update the Data

Every year around March, the Bureau of Labor Statistics [publishes](http://www.bls.gov/cps/cpsaat39.htm) the latest wage data from the year before.

To update the web site:

- Import the data into [a spreadsheet](https://docs.google.com/spreadsheets/d/1KQFBYYBdFoHtYoixBCERvgTiWkU6YcyeX_-Wzo1g1hc/edit?usp=sharing).
- Export to csv and add it to the `src` folder.
- Import that csv into Postgres as per the import sql files here.
- Export the sql file into this directory for future use.
- Run PostGraphile and update `GapAPI.js` with the results from the query in the `gql` folder.

## Data Explorations

Important note: According to the BLS, 2011 data is not "strictly comparable" to 2020 data:

> Effective with January 2020 data, occupations reflect the introduction of the 2018 Census occupational classification system, derived from the 2018 Standard Occupational Classification (SOC). No historical data have been revised. Data for 2020 are not strictly comparable with earlier years.

Therefore, the following comparisons are for fun and education, but not endorsed by actual data scientists.

- Any occupations where women and men made exactly the same / i.e., cents_to_dollar is 100 in 2023?
  Yes for 2 occupations, Other physicians assistants & Production, planning, and expediting clerks

```
SELECT
	o.id,
	o.name,
	wg2023.cents_to_dollar AS wg2023_cents_to_dollar,
	wg2023.year
FROM
	wage_gaps wg2023
	INNER JOIN occupations o ON wg2023.occupation_id = o.id
WHERE
	wg2023.cents_to_dollar = 100
	AND wg2023.year = 2023
```

- Any gaps that we had data for in 2011 that we don't in 2023? 7
- Any gaps that we didn't have data for in 2011 that we do in 2023? 19

```
SELECT
	o.id,
	o.name,
	wg2011.cents_to_dollar AS wg2011_cents_to_dollar,
	wg2023.cents_to_dollar AS wg2023_cents_to_dollar
FROM
	wage_gaps wg2023
	INNER JOIN wage_gaps wg2011 ON wg2011.occupation_id = wg2023.occupation_id
	INNER JOIN occupations o ON wg2011.occupation_id = o.id
WHERE
	wg2011.cents_to_dollar IS NULL
	AND wg2023.cents_to_dollar IS NOT NULL
	AND wg2011.year = 2011
	AND wg2023.year = 2023
```

- Are there any new occupations with gaps in 2023 not in the 2011 dataset?
  Yes, 37!

```
SELECT
    o.id,
    o.name,
    wg2023.cents_to_dollar
FROM
	wage_gaps wg2023
INNER JOIN
	occupations o
ON
	o.id = wg2023.occupation_id
WHERE
	o.name NOT IN
	( SELECT o2011.name
		FROM
			wage_gaps wg2011
		INNER JOIN
			occupations o2011
		ON
			o2011.id = wg2011.occupation_id
		WHERE wg2011.year = '2011'
	)
	AND cents_to_dollar IS NOT NULL
```

- Did any of the parent slugs change from 2011 to 2023?
  Yes, 1: Personal Care Aides moved from Personal Care and Service Occupations to Healthcare Support Occupations

```
SELECT
	o.name,
	we.parent,
	o.parent_slug_denorm
FROM
	weekly_earnings we
	INNER JOIN occupations o ON o.slug = we.slug
WHERE
	we.parent != o.parent_slug_denorm
```

- How many gaps got larger from 2011 to 2023? 61
- How many gaps got smaller from 2011 to 2023? 39

```
SELECT
	o.id,
	o.name,
	wg2011.cents_to_dollar AS wg2011_cents_to_dollar,
	wg2023.cents_to_dollar AS wg2023_cents_to_dollar,
	wg2023.cents_to_dollar - wg2011.cents_to_dollar AS gap_size_difference
FROM
	wage_gaps wg2023
	INNER JOIN wage_gaps wg2011 ON wg2011.occupation_id = wg2023.occupation_id
	INNER JOIN occupations o ON wg2011.occupation_id = o.id
WHERE
	wg2011.cents_to_dollar IS NOT NULL
	AND wg2023.cents_to_dollar IS NOT NULL
	AND wg2011.year = 2011
	AND wg2023.year = 2023
	AND wg2011.cents_to_dollar < wg2023.cents_to_dollar
```
