// @flow
import { mapStateToProps, mapDispatchToProps } from './Counter'
import { increment, incrementIfOdd, incrementAsync, decrement } from '../modules/count'

describe('Counter container', () => {
  describe('mapStateToProps', () => {
    it('should create props', () => {
      expect(mapStateToProps({ count: 1 })).toEqual({ count: 1 })
    })
  })

  describe('mapDispatchToProps', () => {
    const dispatch = jest.fn()
    const props = mapDispatchToProps(dispatch)

    beforeEach(() => {
      dispatch.mockClear()
    })

    it('onIncrement should dispatch increment', () => {
      props.onIncrement()
      expect(dispatch).toBeCalledWith(increment())
    })

    it('onIncrementIfOdd should dispatch incrementIfOdd', () => {
      props.onIncrementIfOdd()
      expect(dispatch).toBeCalledWith(incrementIfOdd())
    })

    it('onIncrementAsync should dispatch incrementAsync', () => {
      jest.useFakeTimers()
      props.onIncrementAsync()
      const dispatch2 = jest.fn()
      dispatch.mock.calls[0][0](dispatch2)
      jest.runAllTimers()
      expect(dispatch2).toBeCalledWith(increment())
    })

    it('onDecrement should dispatch decrement', () => {
      props.onDecrement()
      expect(dispatch).toBeCalledWith(decrement())
    })
  })
})
