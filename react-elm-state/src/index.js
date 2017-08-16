// @flow
import React from "react"
import { render } from "react-dom"
import { Provider } from "react-elm-state"
import Counter from "./containers/Counter"
import Elm from "./modules/Main.elm"

const initialState = { value: 0, step: 1 }

render(
  <Provider module={Elm.Main} initialState={initialState}>
    <Counter />
  </Provider>,
  document.getElementById("root")
)
