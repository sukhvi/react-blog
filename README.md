# Simple Blog Application built using core features of React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Live Demo

You can check the live view [here](https://gitreactblog.netlify.app/)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Running Local Mock Server for data

In the project directory, you can run

### `npx json-server --watch data/db.json  --port 8000`

Json-Server has been added to the dev dependencies because we are using it only for the development purpose.\
Once you are able to run the above command the data will be served from the db.json file in data folder.\


