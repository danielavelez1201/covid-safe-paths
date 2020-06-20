import { TracingStrategy } from '../tracingStrategy';
import { PermissionsProvider } from './PermissionsContext';
import {
  useGPSCopyContent,
  useGPSInterpolatedCopyContent,
  gpsAssets,
} from './content';

const gpsStrategy: TracingStrategy = {
  name: 'bt',
  exposureInfoSubscription: () => {
    return {
      remove: () => {},
    };
  },
  permissionsProvider: PermissionsProvider,
  assets: gpsAssets,
  useCopy: useGPSCopyContent,
  useInterpolatedCopy: useGPSInterpolatedCopyContent,
};

export default gpsStrategy;
