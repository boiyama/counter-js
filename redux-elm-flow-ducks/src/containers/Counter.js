// @ flow
import { connect } from "react-redux"
import Counter from "../components/Counter"
import type { State, Dispatch } from "../modules"

export const mapStateToProps = (state: State) => ({
  count: state.count
})

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  onIncrement: () => {
    dispatch({ type: "INCREASE" })
  },
  onIncrementIfOdd: () => {
    dispatch({ type: "INCREASE_IF_ODD" })
  },
  onIncrementAsync: () => {
    dispatch({ type: "INCREASE_ASYNC" })
  },
  onDecrement: () => {
    dispatch({ type: "DECREASE" })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
