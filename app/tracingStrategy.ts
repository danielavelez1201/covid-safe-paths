import { ExposureInfoSubscription } from './ExposureHistoryContext';

export interface TracingStrategy {
  name: string;
  exposureInfoSubscription: ExposureInfoSubscription;
  permissionsProvider: ({ children }: { children: JSX.Element }) => JSX.Element;
  assets: StrategyAssets;
  useCopy: StrategyCopyContentHook;
  useInterpolatedCopy: StrategyInterpolatedCopyContentHook;
}

export type TranslationHook = () => {
  t: (translation: string, options?: { name: string }) => string;
};

export interface StrategyAssets {
  onboarding2Background: string;
  onboarding2Icon: string;
  onboarding3Background: string;
  onboarding3Icon: string;
  onboarding4Background: string;
  onboarding4Icon: string;
  exportPublishIcon: string;
}

export type StrategyCopyContentHook = (
  useTranslation: TranslationHook,
) => StrategyCopyContent;

export interface StrategyCopyContent {
  onboarding2Header: string;
  onboarding2Subheader: string;
  onboarding3Header: string;
  onboarding3Subheader: string;
  onboarding4Header: string;
  onboarding4Subheader: string;
  onboarding4Button: string;
  settingsLoggingActive: string;
  settingsLoggingInactive: string;
  aboutHeader: string;
  legalHeader: string;
  detailedHistoryWhatThisMeansPara: string;
  tracingOffScreenHeader: string;
  tracingOffScreenSubheader: string;
  tracingOffScreenButton: string;
  allServicesOnScreenHeader: string;
  allServicesOnScreenSubheader: string;
  allServicesOnNoHaAvailableSubHeader: string;
  exposureNotificationsNotAvailableHeader: string;
  exposureNotificationsNotAvailableSubheader: string;
  notificationsOffScreenHeader: string;
  notificationsOffScreenSubheader: string;
  notificationsOffScreenButton: string;
  selectAuthorityScreenHeader: string;
  selectAuthorityScreenSubheader: string;
  selectAuthorityScreenButton: string;
  noAuthoritiesScreenHeader: string;
  noAuthoritiesScreenSubheader: string;
  exportStartTitle: string;
  exportStartBody: string;
  exportCodeTitle: string;
  exportPublishButtonSubtitle: string;
  exportPublishTitle: string;
  exportCompleteBody: string;
}

export type StrategyInterpolatedCopyContentHook = (
  useTranslation: TranslationHook,
) => StrategyInterpolatedCopyContent;

export interface StrategyInterpolatedCopyContent {
  exportCodeBody: (name: string) => string;
  exportPublishBody: (name: string) => string;
}
