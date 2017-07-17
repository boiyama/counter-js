// @flow
import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import rootReducer from "./modules"

const configureStore = (preloadedState: Object = {}) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware)
  )

  return store
}

export default configureStore
