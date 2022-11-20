# IMMUNA

## Requirements
* Implement a dummy react app in TypeScript following the given figma design
* All the information is hardcoded, except for the Balance of the pool column
* To fetch the "Balance" column data from the suggested APIs below
* Focus on quality of code, accuracy of design implementation and bug-free implementation
* Suggested APIs:
  * https://coinmarketcap.com/api/
  * https://defillama.com/docs/api
  * https://www.coingecko.com/en/api

## Overview
* The app is created using **TypeScript** & **React**
* **GraphQL with Apollo** is used to fetch data from Uniswap V3 pools using the GraphQL [endpoint](https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3) provided by Uniswap
  * Note that I have used the endpoint provided by Uniswap instead of the suggested APIs above due to data availability
  * GraphQL query string is saved in the `gqlQuery.ts` file
* **TailwindCSS** is used for styling
* To access the pages, 2 endpoints have been created using ``react-router-dom``
  * ``http://localhost:3000/`` - **Login** page
  * ``http://localhost:3000/dashboard`` - **Dashboard** page
* Additionally, ``Error Boundary`` and ``Loading`` pages are created to handle error and loading scenarios
* ``Risk Status`` on **Dashboard** page is interactive - user can click on the Risk Status and a Risk Status pop-up will appear on the screen

## How to Start the App
1. To start the app, first clone this repo
```
git clone https://github.com/francisldn/immuna.git
```
2. Go to the root directory and install dependencies
```
cd immuna
npm install
```
3. Run the app from root directory
```
npm run start
```
