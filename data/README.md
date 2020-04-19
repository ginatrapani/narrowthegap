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