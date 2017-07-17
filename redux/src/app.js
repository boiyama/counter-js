import React from 'react'
import { connect } from 'react-redux'



// ActionCreators


export const increase = () => ({ type: 'INCREASE' })

export const increaseIfOdd = () => ({ type: 'INCREASE_IF_ODD' })

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
  onIncreaseAsync: () => { setTimeout(() => { dispatch(increase()) }, 1000) },
  onDecrease: () => { dispatch(decrease()) },
})

export const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)
