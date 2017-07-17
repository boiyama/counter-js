// @flow
import React from "react"
import { shallow } from "enzyme"
import Counter from "./Counter"

describe("Counter component", () => {
  const onIncrement = jest.fn()
  const onIncrementIfOdd = jest.fn()
  const onIncrementAsync = jest.fn()
  const onDecrement = jest.fn()

  const component = shallow(
    <Counter
      count={0}
      onIncrement={onIncrement}
      onIncrementIfOdd={onIncrementIfOdd}
      onIncrementAsync={onIncrementAsync}
      onDecrement={onDecrement}
    />
  )

  it("should display count", () => {
    expect(component.find("p").text()).toMatch(/^Clicked: 0 times/)
  })

  it("first button should call onIncrement", () => {
    component.find("button").at(0).simulate("click")
    expect(onIncrement).toBeCalled()
  })

  it("second button should call onDecrement", () => {
    component.find("button").at(1).simulate("click")
    expect(onDecrement).toBeCalled()
  })

  it("third button should call onIncrementIfOdd", () => {
    component.find("button").at(2).simulate("click")
    expect(onIncrementIfOdd).toBeCalled()
  })

  it("fourth button should call onIncrementAsync", () => {
    component.find("button").at(3).simulate("click")
    expect(onIncrementAsync).toBeCalled()
  })
})
