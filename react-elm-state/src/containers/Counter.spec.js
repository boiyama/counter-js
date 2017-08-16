// @flow
import React from "react"
import { shallow } from "enzyme"
import { Counter } from "./Counter"

describe("Counter SFC", () => {
  const props = {
    value: 0,
    step: 1,
    onStepChange: jest.fn(),
    onIncrease: jest.fn(),
    onIncreaseAsync: jest.fn(),
    onDecrease: jest.fn(),
    onDecreaseAsync: jest.fn(),
  }

  const enzymeWrapper = shallow(
    <Counter {...props} />
  )

  it("should display value", () => {
    expect(Number(enzymeWrapper.find("p").text())).toBe(props.value)
  })

  it("input should have step", () => {
    expect(enzymeWrapper.find("input").prop("defaultValue")).toBe(props.step)
  })

  it("input should call onStepChange", () => {
    const event = new Event("input")
    enzymeWrapper.find("input").simulate("input", event)
    expect(props.onStepChange).toBeCalledWith(event)
  })

  it("first button should call onIncrease", () => {
    enzymeWrapper.find("button").at(0).simulate("click")
    expect(props.onIncrease).toBeCalled()
  })

  it("second button should call onIncreaseAsync", () => {
    enzymeWrapper.find("button").at(1).simulate("click")
    expect(props.onIncreaseAsync).toBeCalled()
  })

  it("third button should call onDecrease", () => {
    enzymeWrapper.find("button").at(2).simulate("click")
    expect(props.onDecrease).toBeCalled()
  })

  it("fourth button should call onDecreaseAsync", () => {
    enzymeWrapper.find("button").at(3).simulate("click")
    expect(props.onDecreaseAsync).toBeCalled()
  })
})
