// @flow
import React from "react"
import { shallow } from "enzyme"
import Counter from "./Counter"

describe("Counter component", () => {
  const onIncrease = jest.fn()
  const onIncreaseIfOdd = jest.fn()
  const onIncreaseAsync = jest.fn()
  const onDecrease = jest.fn()

  const component = shallow(
    <Counter
      count={0}
      onIncrease={onIncrease}
      onIncreaseIfOdd={onIncreaseIfOdd}
      onIncreaseAsync={onIncreaseAsync}
      onDecrease={onDecrease}
    />
  )

  it("should display count", () => {
    expect(component.find("p").text()).toMatch(/^Clicked: 0 times/)
  })

  it("first button should call onIncrease", () => {
    component.find("button").at(0).simulate("click")
    expect(onIncrease).toBeCalled()
  })

  it("second button should call onDecrease", () => {
    component.find("button").at(1).simulate("click")
    expect(onDecrease).toBeCalled()
  })

  it("third button should call onIncreaseIfOdd", () => {
    component.find("button").at(2).simulate("click")
    expect(onIncreaseIfOdd).toBeCalled()
  })

  it("fourth button should call onIncreaseAsync", () => {
    component.find("button").at(3).simulate("click")
    expect(onIncreaseAsync).toBeCalled()
  })
})
