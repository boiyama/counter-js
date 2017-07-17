// @flow
import { delay, takeEvery } from "redux-saga"
import { call, put } from "redux-saga/effects"

// Types

export type State = number

export type Action =
  | { type: "INCREASE" }
  | { type: "INCREASE_IF_ODD" }
  | { type: "INCREASE_ASYNC" }
  | { type: "DECREASE" }

// Reducer

export default (state: State = 0, action: Object): State => {
  switch (action.type) {
    case "INCREASE":
      return state + 1
    case "INCREASE_IF_ODD":
      return state % 2 !== 0 ? state + 1 : state
    case "DECREASE":
      return state - 1
    default:
      return state
  }
}

// ActionCreators

export const increase = () => ({ type: "INCREASE" })

export const increaseIfOdd = () => ({ type: "INCREASE_IF_ODD" })

export const increaseAsync = () => ({ type: "INCREASE_ASYNC" })

export const decrease = () => ({ type: "DECREASE" })

// Saga

export function* increaseAsyncSaga(): Generator<*, *, *> {
  yield call(delay, 1000)
  yield put(increase())
}

export function* countSaga(): Generator<*, *, *> {
  yield* takeEvery("INCREASE_ASYNC", increaseAsyncSaga)
}
