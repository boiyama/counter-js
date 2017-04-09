import React from 'react'
import { shallow } from 'enzyme'
import {
  increment,
  incrementIfOdd,
  decrement,
  reducer,
  Counter,
  mapStateToProps,
  mapDispatchToProps,
} from './app'


describe('Actions', () => {
  it('increment should create INCREMENT action', () => {
    expect(increment()).toEqual({ type: 'INCREMENT' })
  })

  it('incrementIfOdd should create INCREMENT_IF_ODD action', () => {
    expect(incrementIfOdd()).toEqual({ type: 'INCREMENT_IF_ODD' })
  })

  it('decrement should create DECREMENT action', () => {
    expect(decrement()).toEqual({ type: 'DECREMENT' })
  })
})


describe('Reducers', () => {
  describe('reducer', () => {
    it('should provide the initial state', () => {
      expect(reducer(undefined, {})).toBe(0)
    })

    it('should handle INCREMENT action', () => {
      expect(reducer(1, { type: 'INCREMENT' })).toBe(2)
    })

    it('should handle INCREMENT_IF_ODD action', () => {
      expect(reducer(0, { type: 'INCREMENT_IF_ODD' })).toBe(0)
      expect(reducer(1, { type: 'INCREMENT_IF_ODD' })).toBe(2)
    })

    it('should handle DECREMENT action', () => {
      expect(reducer(1, { type: 'DECREMENT' })).toBe(0)
    })

    it('should ignore unknown actions', () => {
      expect(reducer(1, { type: 'unknown' })).toBe(1)
    })
  })
})


describe('Counter Presentational', () => {
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

  it('should display count', () => {
    expect(component.find('p').text()).toMatch(/^Clicked: 0 times/)
  })

  it('first button should call onIncrement', () => {
    component.find('button').at(0).simulate('click')
    expect(onIncrement).toBeCalled()
  })

  it('second button should call onDecrement', () => {
    component.find('button').at(1).simulate('click')
    expect(onDecrement).toBeCalled()
  })

  it('third button should call onIncrementIfOdd', () => {
    component.find('button').at(2).simulate('click')
    expect(onIncrementIfOdd).toBeCalled()
  })

  it('fourth button should call onIncrementAsync', () => {
    component.find('button').at(3).simulate('click')
    expect(onIncrementAsync).toBeCalled()
  })
})


describe('Counter Container', () => {
  describe('mapStateToProps', () => {
    it('should create props', () => {
      expect(mapStateToProps(1)).toEqual({ count: 1 })
    })
  })

  describe('mapDispatchToProps', () => {
    const dispatch = jest.fn()
    const props = mapDispatchToProps(dispatch)

    it('onIncrement should dispatch increment', () => {
      props.onIncrement()
      expect(dispatch).toBeCalledWith(increment())
    })

    it('onIncrementIfOdd should dispatch incrementIfOdd', () => {
      props.onIncrementIfOdd()
      expect(dispatch).toBeCalledWith(incrementIfOdd())
    })

    it('onIncrementAsync should dispatch increment in a second', (done) => {
      props.onIncrementAsync()
      setTimeout(() => {
        expect(dispatch).toBeCalledWith(increment())
        done()
      }, 1000)
    })

    it('onDecrement should dispatch decrement', () => {
      props.onDecrement()
      expect(dispatch).toBeCalledWith(decrement())
    })
  })
})
