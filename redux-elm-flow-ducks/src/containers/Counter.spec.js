// @flow
import { mapStateToProps, mapDispatchToProps } from "./Counter"

describe("Counter container", () => {
  describe("mapStateToProps", () => {
    it("should create props", () => {
      expect(mapStateToProps({ count: 1 })).toEqual({ count: 1 })
    })
  })

  describe("mapDispatchToProps", () => {
    const dispatch = jest.fn()
    const props = mapDispatchToProps(dispatch)

    it("onIncrease should dispatch increase", () => {
      props.onIncrease()
      expect(dispatch).toBeCalledWith({ type: "INCREASE" })
    })

    it("onIncreaseIfOdd should dispatch increaseIfOdd", () => {
      props.onIncreaseIfOdd()
      expect(dispatch).toBeCalledWith({ type: "INCREASE_IF_ODD" })
    })

    it("onIncreaseAsync should dispatch increaseAsync", () => {
      props.onIncreaseAsync()
      expect(dispatch).toBeCalledWith({ type: "INCREASE_ASYNC" })
    })

    it("onDecrease should dispatch decrease", () => {
      props.onDecrease()
      expect(dispatch).toBeCalledWith({ type: "DECREASE" })
    })
  })
})
