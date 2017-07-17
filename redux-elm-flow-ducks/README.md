# A Counter example using React, Redux, Jest, Enzyme, redux-elm-middleware, Flow, and Ducks

* [React](https://facebook.github.io/react/) - UI library
* [Redux](http://redux.js.org) - State management library
* [Jest](https://facebook.github.io/jest/) - Zero configuration testing platform
* [Enzyme](http://airbnb.io/enzyme/) - Testing utility for React
* [Create React App](https://github.com/facebookincubator/create-react-app) - Tool for creating React apps with no build configuration
* [redux-elm-middleware](https://github.com/stoeffel/redux-elm-middleware) - A Redux middleware that uses Elm as a reducer. To creating reliable apps, Elm makes Redux state immutable
and makes side-effect decouple
* [Flow](https://flowtype.org/) - Static type checker for JavaScript
* [Ducks](https://github.com/erikras/ducks-modular-redux) - Redux code structure proposal that bundles reducers, action types and actions


# Install requirements

* Node.js - visit https://nodejs.org/en/download/package-manager/
* Yarn - visit https://yarnpkg.com/en/docs/install
* Elm - visit https://guide.elm-lang.org/install.html


# Usage

```sh
cd path/to/redux-elm-flow-ducks
yarn install
yarn install:elm

# starts server
yarn start

# tests
yarn test

# checks types
yarn flow
```
