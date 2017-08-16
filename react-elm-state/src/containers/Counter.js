// @flow
import React from "react"
import { withElm, type WithElm } from "react-elm-state"

type ElmProps = {
  value: number,
  step: number,
  onStepChange: () => void,
  onIncrease: () => void,
  onIncreaseAsync: () => void,
  onDecrease: () => void,
  onDecreaseAsync: () => void
}

export const Counter = ({
  value,
  step,
  onStepChange,
  onIncrease,
  onIncreaseAsync,
  onDecrease,
  onDecreaseAsync
}: ElmProps) =>
  <div>
    <p>
      {value}
    </p>
    <input
      defaultValue={step}
      min="1"
      style={{width: "3em"}}
      type="number"
      onInput={onStepChange}
    />
    <button onClick={onIncrease}>+</button>
    <button onClick={onIncreaseAsync}>+ in 1sec</button>
    <button onClick={onDecrease}>-</button>
    <button onClick={onDecreaseAsync}>- in 1sec</button>
  </div>

export default (withElm: WithElm<{}, ElmProps>)([
  "value",
  "step",
  "onStepChange",
  "onIncrease",
  "onIncreaseAsync",
  "onDecrease",
  "onDecreaseAsync"
])(Counter)
