// @flow
import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import createElmMiddleware, { createElmReducer } from "redux-elm-middleware"
import Elm from "./modules/Reducer.elm"

const configureStore = (preloadedState: Object = {}) => {
  const elmReducer = createElmReducer(0)
  const rootReducer = combineReducers({
    count: elmReducer
  })

  const { run, elmMiddleware } = createElmMiddleware(Elm.Reducer.worker())

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(elmMiddleware))
  )

  run(store)

  return store
}

export default configureStore
