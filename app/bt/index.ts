import { TracingStrategy } from '../tracingStrategy';
import * as BTNativeModule from './nativeModule';
import { ExposureNotificationsProvider } from './ExposureNotificationContext';
import {
  useBTCopyContent,
  useBTInterpolatedCopyContent,
  btAssets,
} from './content';

const btStrategy: TracingStrategy = {
  name: 'bt',
  exposureInfoSubscription: BTNativeModule.subscribeToExposureEvents,
  permissionsProvider: ExposureNotificationsProvider,
  assets: btAssets,
  useCopy: useBTCopyContent,
  useInterpolatedCopy: useBTInterpolatedCopyContent,
};

export default btStrategy;
