import {
  StrategyAssets,
  TranslationHook,
  StrategyCopyContentHook,
  StrategyInterpolatedCopyContent,
} from '../tracingStrategy';

import { Icons, Images } from '../assets';

export const gpsAssets: StrategyAssets = {
  onboarding2Background: Images.OnboardingBackground2,
  onboarding2Icon: Icons.LocationPin,
  onboarding3Background: Images.OnboardingBackground2,
  onboarding3Icon: Icons.Heart,
  onboarding4Background: Images.OnboardingBackground3,
  onboarding4Icon: Icons.BellYellow,
  exportPublishIcon: Icons.Publish,
};

export const useGPSInterpolatedCopyContent = (
  useTranslation: TranslationHook,
): StrategyInterpolatedCopyContent => {
  const { t } = useTranslation();
  return {
    exportCodeBody: (name: string) => t('export.code_input_body', { name }),
    exportPublishBody: (name: string) =>
      t('export.publish_consent_body', { name }),
  };
};

export const useGPSCopyContent: StrategyCopyContentHook = (useTranslation) => {
  const { t } = useTranslation();
  return {
    notificationsOffScreenHeader: t('home.shared.notifications_off_header'),
    notificationsOffScreenSubheader: t(
      'home.shared.notifications_off_subheader',
    ),
    notificationsOffScreenButton: t('home.shared.notifications_off_button'),
    selectAuthorityScreenHeader: t('home.shared.select_authority_header'),
    selectAuthorityScreenSubheader: t('home.shared.select_authority_subheader'),
    selectAuthorityScreenButton: t('home.shared.select_authority_button'),
    noAuthoritiesScreenHeader: t('home.shared.no_authorities_header'),
    noAuthoritiesScreenSubheader: t('home.shared.no_authorities_subheader'),
    onboarding2Header: t('label.launch_screen2_header_location'),
    onboarding2Subheader: t('label.launch_screen2_subheader_location'),
    onboarding3Header: t('label.launch_screen3_header_location'),
    onboarding3Subheader: t('label.launch_screen3_subheader_location'),
    onboarding4Header: t('label.launch_screen4_header_location'),
    onboarding4Subheader: t('label.launch_screen4_subheader_location'),
    onboarding4Button: t('label.launch_set_up_phone_location'),
    settingsLoggingActive: t('label.logging_active_location'),
    settingsLoggingInactive: t('label.logging_inactive_location'),
    aboutHeader: t('label.about_header_location'),
    legalHeader: t('label.legal_page_header_location'),
    detailedHistoryWhatThisMeansPara: t(
      'history.what_does_this_mean_para_location',
    ),
    exposureNotificationsNotAvailableHeader: t(
      'home.bluetooth.unavailable_header',
    ),
    exposureNotificationsNotAvailableSubheader: t(
      'home.bluetooth.unavailable_subheader',
    ),
    tracingOffScreenHeader: t('home.gps.tracing_off_header'),
    tracingOffScreenSubheader: t('home.gps.tracing_off_subheader'),
    tracingOffScreenButton: t('home.gps.tracing_off_button'),
    allServicesOnScreenHeader: t('home.gps.all_services_on_header'),
    allServicesOnScreenSubheader: t('home.gps.all_services_on_subheader'),
    allServicesOnNoHaAvailableSubHeader: t(
      'home.gps.all_services_on_no_ha_available',
    ),
    exportStartTitle: t('export.start_title'),
    exportStartBody: t('export.start_body'),
    exportCodeTitle: t('export.code_input_title'),
    exportPublishButtonSubtitle: t('export.consent_button_subtitle'),
    exportPublishTitle: t('export.publish_consent_title'),
    exportCompleteBody: t('export.complete_body'),
  };
};
