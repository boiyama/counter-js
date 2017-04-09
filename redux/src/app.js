import React from 'react'
import { connect } from 'react-redux'



// ActionCreators


export const increment = () => ({ type: 'INCREMENT' })

export const incrementIfOdd = () => ({ type: 'INCREMENT_IF_ODD' })

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
  onIncrementAsync: () => { setTimeout(() => { dispatch(increment()) }, 1000) },
  onDecrement: () => { dispatch(decrement()) },
})

export const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)
