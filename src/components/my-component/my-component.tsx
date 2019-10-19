import { Component, Prop, h } from '@stencil/core';
import { Tunnel, TunnelContext } from './Tunnel';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  render() {
    const context = {foo: 'Test'};
    return (
      <div>
        <Tunnel.Provider state={context}>
          <Tunnel.Consumer>
            {(context: TunnelContext) => {
              const newContext = {...context, foo: 'foo'};
              return (
                <Tunnel.Provider state={newContext}>
                  <Tunnel.Consumer>
                    {(context: TunnelContext) => {
                      return <div>{context.foo}</div>
                    }}
                  </Tunnel.Consumer>
                </Tunnel.Provider>
              );
            }}
          </Tunnel.Consumer>
        </Tunnel.Provider>
        <Tunnel.Provider state={context}>
          <Tunnel.Consumer>
            {(context: TunnelContext) => {
              const newContext = {...context, foo: 'bar'};
              return (
                <Tunnel.Provider state={newContext}>
                  <Tunnel.Consumer>
                    {(context: TunnelContext) => {
                      return <div>{context.foo}</div>
                    }}
                  </Tunnel.Consumer>
                </Tunnel.Provider>
              );
            }}
          </Tunnel.Consumer>
        </Tunnel.Provider>
      </div>
    );
  }
}
