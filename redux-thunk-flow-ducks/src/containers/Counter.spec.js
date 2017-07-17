// @flow
import { mapStateToProps, mapDispatchToProps } from "./Counter"
import { increase, increaseIfOdd, decrease } from "../modules/count"

describe("Counter container", () => {
  describe("mapStateToProps", () => {
    it("should create props", () => {
      expect(mapStateToProps({ count: 1 })).toEqual({ count: 1 })
    })
  })

  describe("mapDispatchToProps", () => {
    const dispatch = jest.fn()
    const props = mapDispatchToProps(dispatch)

    beforeEach(() => {
      dispatch.mockClear()
    })

    it("onIncrease should dispatch increase", () => {
      props.onIncrease()
      expect(dispatch).toBeCalledWith(increase())
    })

    it("onIncreaseIfOdd should dispatch increaseIfOdd", () => {
      props.onIncreaseIfOdd()
      expect(dispatch).toBeCalledWith(increaseIfOdd())
    })

    it("onIncreaseAsync should dispatch increaseAsync", () => {
      jest.useFakeTimers()
      props.onIncreaseAsync()
      const dispatch2 = jest.fn()
      dispatch.mock.calls[0][0](dispatch2)
      jest.runAllTimers()
      expect(dispatch2).toBeCalledWith(increase())
    })

    it("onDecrease should dispatch decrease", () => {
      props.onDecrease()
      expect(dispatch).toBeCalledWith(decrease())
    })
  })
})
