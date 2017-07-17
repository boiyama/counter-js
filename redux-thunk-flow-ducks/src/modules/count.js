// @flow
import type { Dispatch } from "./"

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

export const increaseAsync = () => (dispatch: Dispatch) =>
  setTimeout(() => dispatch(increase()), 1000)

export const decrease = () => ({ type: "DECREASE" })
