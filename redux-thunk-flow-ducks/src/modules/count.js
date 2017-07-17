// @flow
import type { Dispatch } from "./"

// Types

export type State = number

export type Action =
  | { type: "INCREMENT" }
  | { type: "INCREMENT_IF_ODD" }
  | { type: "INCREMENT_ASYNC" }
  | { type: "DECREMENT" }

// Reducer

export default (state: State = 0, action: Object): State => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1
    case "INCREMENT_IF_ODD":
      return state % 2 !== 0 ? state + 1 : state
    case "DECREMENT":
      return state - 1
    default:
      return state
  }
}

// ActionCreators

export const increment = () => ({ type: "INCREMENT" })

export const incrementIfOdd = () => ({ type: "INCREMENT_IF_ODD" })

export const incrementAsync = () => (dispatch: Dispatch) =>
  setTimeout(() => dispatch(increment()), 1000)

export const decrement = () => ({ type: "DECREMENT" })
