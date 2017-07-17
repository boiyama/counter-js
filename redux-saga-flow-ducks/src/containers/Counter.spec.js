// @flow
import { mapStateToProps, mapDispatchToProps } from "./Counter"
import {
  increase,
  increaseIfOdd,
  increaseAsync,
  decrease
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

    it("onIncrease should dispatch increase", () => {
      props.onIncrease()
      expect(dispatch).toBeCalledWith(increase())
    })

    it("onIncreaseIfOdd should dispatch increaseIfOdd", () => {
      props.onIncreaseIfOdd()
      expect(dispatch).toBeCalledWith(increaseIfOdd())
    })

    it("onIncreaseAsync should dispatch increaseAsync", () => {
      props.onIncreaseAsync()
      expect(dispatch).toBeCalledWith(increaseAsync())
    })

    it("onDecrease should dispatch decrease", () => {
      props.onDecrease()
      expect(dispatch).toBeCalledWith(decrease())
    })
  })
})
