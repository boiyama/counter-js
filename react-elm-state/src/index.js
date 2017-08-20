// @flow
import React from "react"
import { render } from "react-dom"
import { Provider } from "react-elm-state"
import Counter from "./containers/Counter"
import Elm from "./modules/Main.elm"

const flags = { value: 0, step: 1 }

render(
  <Provider module={Elm.Main} flags={flags}>
    <Counter />
  </Provider>,
  document.getElementById("root")
)
