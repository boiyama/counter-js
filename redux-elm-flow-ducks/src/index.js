// @flow
import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import Counter from "./containers/Counter"
import configureStore from "./configureStore"

const store = configureStore()

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById("root")
)
