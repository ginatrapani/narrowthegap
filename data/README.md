# Narrow the Gap Data API

To experiment with the data set yourself, in a local, PostgreSQL database, run the `.sql` files in this directory in order.

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

- Any occupations where women and men made exactly the same / i.e., cents_to_dollar is 100 in 2019?
  No in 2019, yes for 3 occupations in 2011

```
SELECT
	o.id,
	o.name,
	wg19.cents_to_dollar AS wg2019_cents_to_dollar,
	wg19.year
FROM
	wage_gaps wg19
	INNER JOIN occupations o ON wg19.occupation_id = o.id
WHERE
	wg19.cents_to_dollar = 100
	AND wg19.year = 2019
```

- Any gaps that we had data for in 2011 that we don't in 2019? 8
- Any gaps that we didn't have data for in 2011 that we do in 2019? 23

```
SELECT
	o.id,
	o.name,
	wg11.cents_to_dollar AS wg2011_cents_to_dollar,
	wg19.cents_to_dollar AS wg2019_cents_to_dollar
FROM
	wage_gaps wg19
	INNER JOIN wage_gaps wg11 ON wg11.occupation_id = wg19.occupation_id
	INNER JOIN occupations o ON wg11.occupation_id = o.id
WHERE
	wg11.cents_to_dollar IS NULL
	AND wg19.cents_to_dollar IS NOT NULL
	AND wg11.year = 2011
	AND wg19.year = 2019
```

- Did any of the parent slugs change from 2011 to 2019? No

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

- How many gaps got larger from 2011 to 2019? 53
- How many gaps got smaller from 2011 to 2019? 65

```
SELECT
	o.id,
	o.name,
	wg11.cents_to_dollar AS wg2011_cents_to_dollar,
	wg19.cents_to_dollar AS wg2019_cents_to_dollar,
	wg19.cents_to_dollar - wg11.cents_to_dollar AS gap_size_difference
FROM
	wage_gaps wg19
	INNER JOIN wage_gaps wg11 ON wg11.occupation_id = wg19.occupation_id
	INNER JOIN occupations o ON wg11.occupation_id = o.id
WHERE
	wg11.cents_to_dollar IS NOT NULL
	AND wg19.cents_to_dollar IS NOT NULL
	AND wg11.year = 2011
	AND wg19.year = 2019
	AND wg11.cents_to_dollar < wg19.cents_to_dollar
```
