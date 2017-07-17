// @flow
import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import Counter from "./redux/containers/Counter"
import configureStore from "./redux/configureStore"

const store = configureStore()

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById("root")
)
