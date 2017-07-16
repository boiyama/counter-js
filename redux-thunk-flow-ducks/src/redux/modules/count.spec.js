// @flow
import countReducer, {
  increment,
  incrementIfOdd,
  incrementAsync,
  decrement,
} from './count'


describe('Reducers', () => {
  describe('countReducer', () => {
    it('should provide the initial state', () => {
      expect(countReducer(undefined, {})).toBe(0)
    })

    it('should handle INCREMENT action', () => {
      expect(countReducer(1, { type: 'INCREMENT' })).toBe(2)
    })

    it('should handle INCREMENT_IF_ODD action', () => {
      expect(countReducer(0, { type: 'INCREMENT_IF_ODD' })).toBe(0)
      expect(countReducer(1, { type: 'INCREMENT_IF_ODD' })).toBe(2)
    })

    it('should handle DECREMENT action', () => {
      expect(countReducer(1, { type: 'DECREMENT' })).toBe(0)
    })

    it('should ignore unknown actions', () => {
      expect(countReducer(1, { type: 'unknown' })).toBe(1)
    })
  })
})


describe('Actions', () => {
  it('increment should create INCREMENT action', () => {
    expect(increment()).toEqual({ type: 'INCREMENT' })
  })

  it('incrementIfOdd should create INCREMENT_IF_ODD action', () => {
    expect(incrementIfOdd()).toEqual({ type: 'INCREMENT_IF_ODD' })
  })

  it('incrementAsync should create INCREMENT_ASYNC action', () => {
    jest.useFakeTimers()
    const dispatch = jest.fn()
    incrementAsync()(dispatch)
    jest.runAllTimers()
    expect(dispatch).toBeCalledWith(increment())
  })

  it('decrement should create DECREMENT action', () => {
    expect(decrement()).toEqual({ type: 'DECREMENT' })
  })
})
