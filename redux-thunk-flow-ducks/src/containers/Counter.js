// @ flow
import { connect } from "react-redux"
import Counter from "../components/Counter"
import type { State, Dispatch } from "../modules"
import {
  increase,
  increaseIfOdd,
  increaseAsync,
  decrease
} from "../modules/count"

export const mapStateToProps = (state: State) => ({
  count: state.count
})

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  onIncrease: () => {
    dispatch(increase())
  },
  onIncreaseIfOdd: () => {
    dispatch(increaseIfOdd())
  },
  onIncreaseAsync: () => {
    dispatch(increaseAsync())
  },
  onDecrease: () => {
    dispatch(decrease())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
