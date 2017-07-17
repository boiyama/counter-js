// @flow
import { combineReducers } from "redux"
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from "redux"
import countReducer from "./count"
import type { State as CountState, Action as CountAction } from "./count"

// Root Types

export type State = CountState

export type Action = CountAction

export type Store = ReduxStore<State, Action>

export type Dispatch = ReduxDispatch<Action>

// Root Reducer

export default combineReducers({
  count: countReducer
})
