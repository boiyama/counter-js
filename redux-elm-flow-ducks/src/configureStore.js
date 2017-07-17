// @flow
import { createStore, applyMiddleware } from "redux"
import createElmMiddleware, {
  reducer as elmReducer
} from "redux-elm-middleware"
import Elm from "./modules/Reducer.elm"

const configureStore = (preloadedState: Object = {}) => {
  const reducer = (state, action) => ({
    ...state,
    ...elmReducer(state, action)
  })

  const { run, elmMiddleware } = createElmMiddleware(Elm.Reducer.worker())

  const store = createStore(
    reducer,
    preloadedState,
    applyMiddleware(elmMiddleware)
  )

  run(store)
  store.dispatch({ type: "INITIALIZE" })

  return store
}

export default configureStore
