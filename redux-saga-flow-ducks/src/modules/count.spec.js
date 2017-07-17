// @flow
import { delay } from "redux-saga"
import { put, call } from "redux-saga/effects"
import countReducer, {
  increase,
  increaseIfOdd,
  increaseAsync,
  decrease,
  increaseAsyncSaga
} from "./count"

describe("Reducers", () => {
  describe("countReducer", () => {
    it("should provide the initial state", () => {
      expect(countReducer(undefined, {})).toBe(0)
    })

    it("should handle INCREASE action", () => {
      expect(countReducer(1, { type: "INCREASE" })).toBe(2)
    })

    it("should handle INCREASE_IF_ODD action", () => {
      expect(countReducer(0, { type: "INCREASE_IF_ODD" })).toBe(0)
      expect(countReducer(1, { type: "INCREASE_IF_ODD" })).toBe(2)
    })

    it("should handle DECREASE action", () => {
      expect(countReducer(1, { type: "DECREASE" })).toBe(0)
    })

    it("should ignore unknown actions", () => {
      expect(countReducer(1, { type: "unknown" })).toBe(1)
    })
  })
})

describe("Actions", () => {
  it("increase should create INCREASE action", () => {
    expect(increase()).toEqual({ type: "INCREASE" })
  })

  it("increaseIfOdd should create INCREASE_IF_ODD action", () => {
    expect(increaseIfOdd()).toEqual({ type: "INCREASE_IF_ODD" })
  })

  it("increaseAsync should create INCREASE_ASYNC action", () => {
    expect(increaseAsync()).toEqual({ type: "INCREASE_ASYNC" })
  })

  it("decrease should create DECREASE action", () => {
    expect(decrease()).toEqual({ type: "DECREASE" })
  })
})

describe("increaseAsyncSaga", () => {
  it("calls delay(1000), dispatchs an INCREASE action, and be done", () => {
    const generator = increaseAsyncSaga()

    expect(generator.next().value).toEqual(call(delay, 1000))

    expect(generator.next().value).toEqual(put(increase()))

    expect(generator.next().done).toBeTruthy()
  })
})
