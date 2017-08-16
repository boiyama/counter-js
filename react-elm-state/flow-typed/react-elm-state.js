declare module "react-elm-state" {
  declare type Ports<T> = {
    [T]:
      | {
          send: (data: mixed) => void
        }
      | {
          subscribe: (callback: (data: mixed) => void) => void
        }
      | {
          unsubscribe: (callback: (data: mixed) => void) => void
        }
  }

  declare class Provider extends React$Component<
    { module: Object, initialState: Object, children?: any },
    { ports: Ports<string> }
  > {}

  declare class ConnectedComponent<OP, EP> extends React$Component<OP, EP> {
    static contextTypes: { ports: Ports<$Keys<EP>>, initialState: Object },
    props: OP,
    state: EP
  }

  declare type SFC<P> = (props: P) => React$Element<*>
  declare type ComponentClass<P> = Class<React$Component<P, *>>

  declare type WithElm<OP, EP> = (
    portNames: Array<$Keys<EP>>
  ) => (
    component: SFC<OP & EP> | ComponentClass<OP & EP>
  ) => Class<ConnectedComponent<OP, EP>>

  declare var withElm: WithElm<*, *>
}
