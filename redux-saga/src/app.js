import React from 'react'
import { connect } from 'react-redux'
import { delay, takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'



// ActionCreators


export const increment = () => ({ type: 'INCREMENT' })

export const incrementIfOdd = () => ({ type: 'INCREMENT_IF_ODD' })

export const incrementAsync = () => ({ type: 'INCREMENT_ASYNC' })

export const decrement = () => ({ type: 'DECREMENT' })



// Reducer


export const reducer = (state = 0, action) => {
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


export function* incrementAsyncSaga() {
  yield call(delay, 1000)
  yield put(increment())
}

export function* saga() {
  yield* takeEvery('INCREMENT_ASYNC', incrementAsyncSaga)
}



// Presentational Component


export const Counter = ({
  count,
  onIncrement,
  onIncrementIfOdd,
  onIncrementAsync,
  onDecrement,
}) => (
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


export const mapStateToProps = state => ({
  count: state,
})

export const mapDispatchToProps = dispatch => ({
  onIncrement: () => { dispatch(increment()) },
  onIncrementIfOdd: () => { dispatch(incrementIfOdd()) },
  onIncrementAsync: () => { dispatch(incrementAsync()) },
  onDecrement: () => { dispatch(decrement()) },
})

export const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)
