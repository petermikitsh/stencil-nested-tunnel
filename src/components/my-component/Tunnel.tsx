import { createProviderConsumer } from '@stencil/state-tunnel';
import { h } from '@stencil/core';

export interface TunnelContext {
  foo: string;
}

const defaultValues: TunnelContext = {
  foo: 'Hello World'
};

export const Tunnel = createProviderConsumer<TunnelContext>(
  defaultValues,
  (subscribe, child) => (
    <context-consumer subscribe={subscribe} renderer={child} />
  )
);
