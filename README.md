This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## npm install serve -g
To install a static server that will run the production build

## serve -s build
To run the build production using serve local server

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Install create-react-app which will install all the dependencies
npm install -g create-react-app

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Installing Babel
npm install babel-cli --save-dev

## Installing Preset
npm install babel-preset-latest --save-dev
npm install babel-preset-stage-0 --save-dev

## Reactstrap
Source: https://reactstrap.github.io
- npm install --save reactstrap react react-dom

## Other sources
React.js Essential Training
Learning React VR
https://reactjs.org

## Courses after watching React.js Essential Training
- React Recipes
- React: Lifecycles
- React: Components, Context and Accessibility

## React Life Cycle
http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram

## Sample API
https://hplussport.com/api/products/order/price/sort/asc/qty/1

## ELMO React (Library)
https://reactjs.org/docs/code-splitting.html
https://elmolearning.atlassian.net/wiki/spaces/DS/pages/470516452/React+Redux+best+practices+and+conventions#React/Reduxbestpracticesandconventions-18.Appstructure(PRchecklist)
http://getbem.com/naming/
https://www.styled-components.com/docs/basics
https://storybook.js.org/
https://github.com/styleguidist/react-styleguidist

## Debugging on React

## Facebook Repo - Tools
- https://github.com/facebook/react-devtools
- https://github.com/facebook/react-devtools/tree/v3

## FLOW - Type checking tool
- https://flow.org
- https://flow.org/en/docs/install/

## Add to package.json after the eject
- "flow": "flow"

## How to use
1. Follow the installation guide on the link above
2. Add // @flow on the file you want to do a type check
3. Run npm run flow OR yarn run flow

## Linter - ESLint
- http://eslint.org
- https://eslint.org/docs/user-guide/getting-started
- https://github.com/yannickcr/eslint-plugin-react

## To add some ESLint plugins
- npm add eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react

## Adding ESLint Config
1. Create a .eslintrc.json file in the root directory of your app 

## Jest - Command to run JEST test
- https://facebook.github.io/jest/docs/en/expect.html#content
- npm test a or yarn test a

## To test using Snapshot or compare image
- npm install react-test-renderer OR yarn add react-test-renderer

## To run a specific file using JEST
- npm test File.test.js 

## Adding a Test Coverage - open the package.json and add the code below after the "test": "react-scripts test"
"coverage": "react-scripts test --env=jsdom --coverage",
- yarn coverage OR npm run coverage 

## Chrome DevTools Overview
- https://developer.chrome.com/devtools
- http://localhost:3000/?react_perf

