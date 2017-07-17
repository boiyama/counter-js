// @flow
import React from "react"

export type Props = {
  count: number,
  onIncrease: () => void,
  onIncreaseIfOdd: () => void,
  onIncreaseAsync: () => void,
  onDecrease: () => void
}

export default ({
  count,
  onIncrease,
  onIncreaseIfOdd,
  onIncreaseAsync,
  onDecrease
}: Props) =>
  <p>
    Clicked: {count} times <button onClick={onIncrease}>+</button>{" "}
    <button onClick={onDecrease}>-</button>{" "}
    <button onClick={onIncreaseIfOdd}>Increase if odd</button>{" "}
    <button onClick={onIncreaseAsync}>Increase async</button>
  </p>
