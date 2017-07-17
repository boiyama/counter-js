// @ flow
import { connect } from "react-redux"
import Counter from "../components/Counter"
import type { State, Dispatch } from "../modules"
import {
  increment,
  incrementIfOdd,
  incrementAsync,
  decrement
} from "../modules/count"

export const mapStateToProps = (state: State) => ({
  count: state.count
})

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  onIncrement: () => {
    dispatch(increment())
  },
  onIncrementIfOdd: () => {
    dispatch(incrementIfOdd())
  },
  onIncrementAsync: () => {
    dispatch(incrementAsync())
  },
  onDecrement: () => {
    dispatch(decrement())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
