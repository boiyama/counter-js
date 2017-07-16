// @flow
import React from 'react'

export type Props = {
  count: number,
  onIncrement: () => void,
  onIncrementIfOdd: () => void,
  onIncrementAsync: () => void,
  onDecrement: () => void,
}

export default ({
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
