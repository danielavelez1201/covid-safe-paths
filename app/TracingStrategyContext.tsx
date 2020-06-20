import React, { createContext } from 'react';
import {
  TracingStrategy,
  StrategyCopyContentHook,
  StrategyInterpolatedCopyContentHook,
  StrategyAssets,
} from './tracingStrategy';
import { ExposureHistoryProvider } from './ExposureHistoryContext';

interface TracingStrategyContextState {
  name: string;
  assets: StrategyAssets;
  useStrategyCopy: StrategyCopyContentHook;
  useInterpolatedStrategyCopy: StrategyInterpolatedCopyContentHook;
}

const defaultState = {
  name: 'initializingTracingStrategy',
};

const TracingStrategyContext = createContext<TracingStrategyContextState>(
  defaultState,
);

interface TracingStrategyProps {
  children: JSX.Element;
  strategy: TracingStrategy;
}

const TracingStrategyProvider = ({
  children,
  strategy,
}: TracingStrategyProps): JSX.Element => {
  const StrategyPermissionsProvider = strategy.permissionsProvider;

  return (
    <TracingStrategyContext.Provider
      value={{
        name: strategy.name,
        assets: strategy.assets,
        useCopy: strategy.useCopy,
        useInterpolatedCopy: strategy.useInterpolatedCopy,
      }}>
      <StrategyPermissionsProvider>
        <ExposureHistoryProvider
          exposureInfoSubscription={strategy.exposureInfoSubscription}>
          {children}
        </ExposureHistoryProvider>
      </StrategyPermissionsProvider>
    </TracingStrategyContext.Provider>
  );
};

export { TracingStrategyProvider };
export default TracingStrategyContext;
