// @flow
import React from 'react'
import { connect } from 'react-redux'
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'
import { delay, takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'



// Types


export type State = number

export type Action =
    { type: 'INCREASE' }
  | { type: 'INCREASE_IF_ODD' }
  | { type: 'INCREASE_ASYNC' }
  | { type: 'DECREASE' }

export type Store = ReduxStore<State, Action>

export type Dispatch = ReduxDispatch<Action>



// ActionCreators


export const increase = () => ({ type: 'INCREASE' })

export const increaseIfOdd = () => ({ type: 'INCREASE_IF_ODD' })

export const increaseAsync = () => ({ type: 'INCREASE_ASYNC' })

export const decrease = () => ({ type: 'DECREASE' })



// Reducer


export const reducer = (state: State = 0, action: Object) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1
    case 'INCREASE_IF_ODD':
      return state % 2 !== 0 ? state + 1 : state
    case 'DECREASE':
      return state - 1
    default:
      return state
  }
}



// Saga


export function* increaseAsyncSaga(): Generator<*, *, *> {
  yield call(delay, 1000)
  yield put(increase())
}

export function* saga(): Generator<*, *, *> {
  yield* takeEvery('INCREASE_ASYNC', increaseAsyncSaga)
}



// Presentational Component


export type Props = {
  count: number,
  onIncrease: () => void,
  onIncreaseIfOdd: () => void,
  onIncreaseAsync: () => void,
  onDecrease: () => void,
}

export const Counter = ({
  count,
  onIncrease,
  onIncreaseIfOdd,
  onIncreaseAsync,
  onDecrease,
}: Props) => (
  <p>
    Clicked: {count} times
    {' '}
    <button onClick={onIncrease}>
      +
    </button>
    {' '}
    <button onClick={onDecrease}>
      -
    </button>
    {' '}
    <button onClick={onIncreaseIfOdd}>
      Increase if odd
    </button>
    {' '}
    <button onClick={onIncreaseAsync}>
      Increase async
    </button>
  </p>
)



// Container Component


export const mapStateToProps = (state: State) => ({
  count: state,
})

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  onIncrease: () => { dispatch(increase()) },
  onIncreaseIfOdd: () => { dispatch(increaseIfOdd()) },
  onIncreaseAsync: () => { dispatch(increaseAsync()) },
  onDecrease: () => { dispatch(decrease()) },
})

export const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)
