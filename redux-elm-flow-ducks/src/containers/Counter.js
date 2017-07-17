// @ flow
import { connect } from "react-redux"
import Counter from "../components/Counter"
import type { State, Dispatch } from "../modules"

export const mapStateToProps = (state: State) => ({
  count: state.count
})

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  onIncrease: () => {
    dispatch({ type: "INCREASE" })
  },
  onIncreaseIfOdd: () => {
    dispatch({ type: "INCREASE_IF_ODD" })
  },
  onIncreaseAsync: () => {
    dispatch({ type: "INCREASE_ASYNC" })
  },
  onDecrease: () => {
    dispatch({ type: "DECREASE" })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
