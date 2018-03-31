# Narrow the Gap

A single-serving web site displays the wage gap between men and women in the United States on a per-occupation basis. All factoids based on data provided by the U.S. Bureau of Labor Statistics. See it in action at
[https://narrowthegap.co](https://narrowthegap.co).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.<br>
It uses `react-snapshot` to [statically pre-render](https://medium.com/superhighfives/an-almost-static-stack-6df0a2791319) all the site's pages.

## Update the Data

Every year around March, the BLS publishes the latest wage data from the year before. To update the web site, use the instructions in [this Google Sheet](https://docs.google.com/spreadsheets/d/1fXNntG1sxuh7cAPwjJ4HKydxpOAPm_627G4_AckS0MU/edit?usp=sharing) to transform and export the new data set into the `GapAPI.js` file.
