// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from "redux"

export type State = {
  +count: number
}

export type Action =
  | { type: "INCREASE" }
  | { type: "INCREASE_IF_ODD" }
  | { type: "INCREASE_ASYNC" }
  | { type: "DECREASE" }

export type Store = ReduxStore<State, Action>

export type Dispatch = ReduxDispatch<Action>
