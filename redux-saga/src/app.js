import React from 'react'
import { connect } from 'react-redux'
import { delay, takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'



// ActionCreators


export const increase = () => ({ type: 'INCREASE' })

export const increaseIfOdd = () => ({ type: 'INCREASE_IF_ODD' })

export const increaseAsync = () => ({ type: 'INCREASE_ASYNC' })

export const decrease = () => ({ type: 'DECREASE' })



// Reducer


export const reducer = (state = 0, action) => {
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


export function* increaseAsyncSaga() {
  yield call(delay, 1000)
  yield put(increase())
}

export function* saga() {
  yield* takeEvery('INCREASE_ASYNC', increaseAsyncSaga)
}



// Presentational Component


export const Counter = ({
  count,
  onIncrease,
  onIncreaseIfOdd,
  onIncreaseAsync,
  onDecrease,
}) => (
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


export const mapStateToProps = state => ({
  count: state,
})

export const mapDispatchToProps = dispatch => ({
  onIncrease: () => { dispatch(increase()) },
  onIncreaseIfOdd: () => { dispatch(increaseIfOdd()) },
  onIncreaseAsync: () => { dispatch(increaseAsync()) },
  onDecrease: () => { dispatch(decrease()) },
})

export const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)
