// @flow
import React from 'react'
import { connect } from 'react-redux'
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'
import { delay, takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'



// Types


export type State = number

export type Action =
    { type: 'INCREMENT' }
  | { type: 'INCREMENT_IF_ODD' }
  | { type: 'INCREMENT_ASYNC' }
  | { type: 'DECREMENT' }

export type Store = ReduxStore<State, Action>

export type Dispatch = ReduxDispatch<Action>



// ActionCreators


export const increment = () => ({ type: 'INCREMENT' })

export const incrementIfOdd = () => ({ type: 'INCREMENT_IF_ODD' })

export const incrementAsync = () => ({ type: 'INCREMENT_ASYNC' })

export const decrement = () => ({ type: 'DECREMENT' })



// Reducer


export const reducer = (state: State = 0, action: Object) => {
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



// Saga


export function* incrementAsyncSaga(): Generator<*, *, *> {
  yield call(delay, 1000)
  yield put(increment())
}

export function* saga(): Generator<*, *, *> {
  yield* takeEvery('INCREMENT_ASYNC', incrementAsyncSaga)
}



// Presentational Component


export type Props = {
  count: number,
  onIncrement: () => void,
  onIncrementIfOdd: () => void,
  onIncrementAsync: () => void,
  onDecrement: () => void,
}

export const Counter = ({
  count,
  onIncrement,
  onIncrementIfOdd,
  onIncrementAsync,
  onDecrement,
}: Props) => (
  <p>
    Clicked: {count} times
    {' '}
    <button onClick={onIncrement}>
      +
    </button>
    {' '}
    <button onClick={onDecrement}>
      -
    </button>
    {' '}
    <button onClick={onIncrementIfOdd}>
      Increment if odd
    </button>
    {' '}
    <button onClick={onIncrementAsync}>
      Increment async
    </button>
  </p>
)



// Container Component


export const mapStateToProps = (state: State) => ({
  count: state,
})

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  onIncrement: () => { dispatch(increment()) },
  onIncrementIfOdd: () => { dispatch(incrementIfOdd()) },
  onIncrementAsync: () => { dispatch(incrementAsync()) },
  onDecrement: () => { dispatch(decrement()) },
})

export const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)
