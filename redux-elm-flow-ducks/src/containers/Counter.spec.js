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

    it("onIncrement should dispatch increment", () => {
      props.onIncrement()
      expect(dispatch).toBeCalledWith({ type: "INCREASE" })
    })

    it("onIncrementIfOdd should dispatch incrementIfOdd", () => {
      props.onIncrementIfOdd()
      expect(dispatch).toBeCalledWith({ type: "INCREASE_IF_ODD" })
    })

    it("onIncrementAsync should dispatch incrementAsync", () => {
      props.onIncrementAsync()
      expect(dispatch).toBeCalledWith({ type: "INCREASE_ASYNC" })
    })

    it("onDecrement should dispatch decrement", () => {
      props.onDecrement()
      expect(dispatch).toBeCalledWith({ type: "DECREASE" })
    })
  })
})
