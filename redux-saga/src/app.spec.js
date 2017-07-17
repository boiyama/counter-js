import React from 'react'
import { shallow } from 'enzyme'
import { delay, takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import {
  increase,
  increaseIfOdd,
  increaseAsync,
  decrease,
  reducer,
  increaseAsyncSaga,
  Counter,
  mapStateToProps,
  mapDispatchToProps,
} from './app'


describe('Actions', () => {
  it('increase should create INCREASE action', () => {
    expect(increase()).toEqual({ type: 'INCREASE' })
  })

  it('increaseIfOdd should create INCREASE_IF_ODD action', () => {
    expect(increaseIfOdd()).toEqual({ type: 'INCREASE_IF_ODD' })
  })

  it('decrease should create DECREASE action', () => {
    expect(decrease()).toEqual({ type: 'DECREASE' })
  })
})


describe('Reducers', () => {
  describe('reducer', () => {
    it('should provide the initial state', () => {
      expect(reducer(undefined, {})).toBe(0)
    })

    it('should handle INCREASE action', () => {
      expect(reducer(1, { type: 'INCREASE' })).toBe(2)
    })

    it('should handle INCREASE_IF_ODD action', () => {
      expect(reducer(0, { type: 'INCREASE_IF_ODD' })).toBe(0)
      expect(reducer(1, { type: 'INCREASE_IF_ODD' })).toBe(2)
    })

    it('should handle DECREASE action', () => {
      expect(reducer(1, { type: 'DECREASE' })).toBe(0)
    })

    it('should ignore unknown actions', () => {
      expect(reducer(1, { type: 'unknown' })).toBe(1)
    })
  })
})


describe('Sagas', () => {
  describe('increaseAsyncSaga', () => {
    it('calls delay(1000), dispatchs an INCREASE action, and be done', () => {
      const generator = increaseAsyncSaga()

      expect(generator.next().value).toEqual(call(delay, 1000))

      expect(generator.next().value).toEqual(put(increase()))

      expect(generator.next().done).toBeTruthy()
    })
  })
})


describe('Counter Presentational', () => {
  const onIncrease = jest.fn()
  const onIncreaseIfOdd = jest.fn()
  const onIncreaseAsync = jest.fn()
  const onDecrease = jest.fn()

  const component = shallow(
    <Counter
      count={0}
      onIncrease={onIncrease}
      onIncreaseIfOdd={onIncreaseIfOdd}
      onIncreaseAsync={onIncreaseAsync}
      onDecrease={onDecrease}
    />
  )

  it('should display count', () => {
    expect(component.find('p').text()).toMatch(/^Clicked: 0 times/)
  })

  it('first button should call onIncrease', () => {
    component.find('button').at(0).simulate('click')
    expect(onIncrease).toBeCalled()
  })

  it('second button should call onDecrease', () => {
    component.find('button').at(1).simulate('click')
    expect(onDecrease).toBeCalled()
  })

  it('third button should call onIncreaseIfOdd', () => {
    component.find('button').at(2).simulate('click')
    expect(onIncreaseIfOdd).toBeCalled()
  })

  it('fourth button should call onIncreaseAsync', () => {
    component.find('button').at(3).simulate('click')
    expect(onIncreaseAsync).toBeCalled()
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

    it('onIncrease should dispatch increase', () => {
      props.onIncrease()
      expect(dispatch).toBeCalledWith(increase())
    })

    it('onIncreaseIfOdd should dispatch increaseIfOdd', () => {
      props.onIncreaseIfOdd()
      expect(dispatch).toBeCalledWith(increaseIfOdd())
    })

    it('onIncreaseAsync should dispatch increaseAsync', () => {
      props.onIncreaseAsync()
      expect(dispatch).toBeCalledWith(increaseAsync())
    })

    it('onDecrease should dispatch decrease', () => {
      props.onDecrease()
      expect(dispatch).toBeCalledWith(decrease())
    })
  })
})
