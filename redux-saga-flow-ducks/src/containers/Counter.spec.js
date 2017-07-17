// @flow
import { mapStateToProps, mapDispatchToProps } from "./Counter"
import {
  increment,
  incrementIfOdd,
  incrementAsync,
  decrement
} from "../modules/count"

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
      expect(dispatch).toBeCalledWith(increment())
    })

    it("onIncrementIfOdd should dispatch incrementIfOdd", () => {
      props.onIncrementIfOdd()
      expect(dispatch).toBeCalledWith(incrementIfOdd())
    })

    it("onIncrementAsync should dispatch incrementAsync", () => {
      props.onIncrementAsync()
      expect(dispatch).toBeCalledWith(incrementAsync())
    })

    it("onDecrement should dispatch decrement", () => {
      props.onDecrement()
      expect(dispatch).toBeCalledWith(decrement())
    })
  })
})
