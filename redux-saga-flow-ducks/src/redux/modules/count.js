// @flow
import { combineReducers } from 'redux'
import { delay, takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'



// Types


export type State = number

export type Action =
    { type: 'INCREMENT' }
  | { type: 'INCREMENT_IF_ODD' }
  | { type: 'INCREMENT_ASYNC' }
  | { type: 'DECREMENT' }



// Reducer


export default (state: State = 0, action: Object): State => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'INCREMENT_IF_ODD':
      return state % 2 !== 0 ? state + 1 : state
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}



// ActionCreators


export const increment = (): Action => ({ type: 'INCREMENT' })

export const incrementIfOdd = (): Action => ({ type: 'INCREMENT_IF_ODD' })

export const incrementAsync = (): Action => ({ type: 'INCREMENT_ASYNC' })

export const decrement = (): Action => ({ type: 'DECREMENT' })



// Saga


export function* incrementAsyncSaga(): Generator<*, *, *> {
  yield call(delay, 1000)
  yield put(increment())
}

export function* countSaga(): Generator<*, *, *> {
  yield* takeEvery('INCREMENT_ASYNC', incrementAsyncSaga)
}
