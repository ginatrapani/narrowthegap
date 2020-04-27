# Narrow the Gap Data API

In a local, PostgreSQL database, run the .sql files in this directory in order.

Spin up [PostGraphile](https://www.graphile.org/postgraphile/) pointing at that database, and run the following GraphQL Query to get the updated data set:

```
{
  occupations: allOccupations {
    gaps: nodes {
      name
      slug
      wageGaps: wageGapsByOccupationId {
        years: nodes {
          menMedianWeeklyEarnings
          womenMedianWeeklyEarnings
          year
          centsToDollar
        }
      }
      parent: occupationByParentId {
        slug
      }
    }
  }
}
```

TODO: Automate this process.

---

## Data Explorations

- Any gaps that we had in 2011 that we don't in 2019? 8
- Any gaps that we didn't have in 2011 that we do in 2019? 23

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
	wg19.cents_to_dollar AS wg2019_cents_to_dollar
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
