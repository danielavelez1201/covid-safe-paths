import {
  StrategyInterpolatedCopyContent,
  StrategyCopyContentHook,
  TranslationHook,
  StrategyAssets,
} from '../tracingStrategy';

import { Icons, Images } from '../assets';

export const btAssets: StrategyAssets = {
  onboarding2Background: Images.LaunchScreen2BT,
  onboarding2Icon: Icons.LocationPin,
  onboarding3Background: Images.LaunchScreen3BT,
  onboarding3Icon: Icons.Heart,
  onboarding4Background: Images.LaunchScreen1BT,
  onboarding4Icon: Icons.BellYellow,
  exportPublishIcon: Icons.Bell,
};

export const useBTInterpolatedCopyContent = (
  useTranslation: TranslationHook,
): StrategyInterpolatedCopyContent => {
  const { t } = useTranslation();
  return {
    exportCodeBody: (name: string) =>
      t('export.code_input_body_bluetooth', { name }),
    exportPublishBody: (name: string) =>
      t('export.publish_consent_body_bluetooth', { name }),
  };
};

export const useBTCopyContent: StrategyCopyContentHook = (
  useTranslation: TranslationHook,
) => {
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
    onboarding2Header: t('label.launch_screen2_header_bluetooth'),
    onboarding2Subheader: t('label.launch_screen2_subheader_bluetooth'),
    onboarding3Header: t('label.launch_screen3_header_bluetooth'),
    onboarding3Subheader: t('label.launch_screen3_subheader_bluetooth'),
    onboarding4Header: t('label.launch_screen4_header_bluetooth'),
    onboarding4Subheader: t('label.launch_screen4_subheader_bluetooth'),
    onboarding4Button: t('label.launch_set_up_phone_bluetooth'),
    settingsLoggingActive: t('label.logging_active_bluetooth'),
    settingsLoggingInactive: t('label.logging_inactive_bluetooth'),
    aboutHeader: t('label.about_header_bluetooth'),
    legalHeader: t('label.legal_page_header_bluetooth'),
    detailedHistoryWhatThisMeansPara: t(
      'history.what_does_this_mean_para_bluetooth',
    ),
    exposureNotificationsNotAvailableHeader: t(
      'home.bluetooth.unavailable_header',
    ),
    exposureNotificationsNotAvailableSubheader: t(
      'home.bluetooth.unavailable_subheader',
    ),
    tracingOffScreenHeader: t('home.bluetooth.tracing_off_header'),
    tracingOffScreenSubheader: t('home.bluetooth.tracing_off_subheader'),
    tracingOffScreenButton: t('home.bluetooth.tracing_off_button'),

    allServicesOnScreenHeader: t('home.bluetooth.all_services_on_header'),
    allServicesOnScreenSubheader: t('home.bluetooth.all_services_on_subheader'),
    allServicesOnNoHaAvailableSubHeader: '',
    exportStartTitle: t('export.start_title_bluetooth'),
    exportStartBody: t('export.start_body_bluetooth'),
    exportCodeTitle: t('export.code_input_title_bluetooth'),
    exportButtonSubtitle: '',
    exportPublishButtonSubtitle: '',
    exportPublishTitle: t('export.publish_consent_title_bluetooth'),
    exportCompleteBody: t('export.complete_body_bluetooth'),
  };
};
