import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  BackHandler,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import TracingStrategyContext from '../TracingStrategyContext';
import { NavigationBarWrapper } from '../components/NavigationBarWrapper';
import { Typography } from '../components/Typography';
import { NavigationProp } from '../navigation';

import { Images } from '../assets';
import { Colors, Spacing } from '../styles';

type LicensesScreenProps = {
  navigation: NavigationProp;
};

const PRIVACY_POLICY_URL =
  'https://docs.google.com/document/d/17u0f8ni9S0D4w8RCUlMMqxAlXKJAd2oiYGP8NUwkINo/edit';

export const LicensesScreen = ({
  navigation,
}: LicensesScreenProps): JSX.Element => {
  const { t } = useTranslation();
  const { useStrategyCopy } = useContext(TracingStrategyContext);
  const { legalHeader } = useStrategyCopy(t);

  const legalHeaderText: string = legalHeader as string;

  const backToMain = () => {
    navigation.goBack();
  };

  const handleBackPress = () => {
    backToMain();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  });

  const infoAddress = 'info@pathcheck.org';
  const pathCheckAddress = 'covidsafepaths.org';

  const handleOnPressOpenUrl = (url: string) => {
    return () => Linking.openURL(url);
  };

  return (
    <NavigationBarWrapper
      title={t('screen_titles.legal')}
      onBackPress={backToMain}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        alwaysBounceVertical={false}>
        <View>
          <Typography use='headline2'>{legalHeaderText}</Typography>
          <View
            style={{ paddingTop: Spacing.xSmall, paddingLeft: Spacing.medium }}>
            <Typography use='body2'>{t('label.legal_page_address')}</Typography>
            <View style={{ height: 20 }} />
            <Typography
              use='body2'
              onPress={handleOnPressOpenUrl('mailto:info@pathcheck.org')}
              style={styles.hyperlink}>
              {infoAddress}
            </Typography>
            <Typography
              use='body2'
              onPress={handleOnPressOpenUrl('covidsafepaths.org')}
              style={styles.hyperlink}>
              {pathCheckAddress}
            </Typography>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.termsInfoRow}
        onPress={handleOnPressOpenUrl(PRIVACY_POLICY_URL)}>
        <Typography style={{ color: Colors.white }} use='body1'>
          {t('label.privacy_policy')}
        </Typography>
        <View style={styles.arrowContainer}>
          <Image source={Images.ForeArrow} />
        </View>
      </TouchableOpacity>
    </NavigationBarWrapper>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: Colors.primaryBackgroundFaintShade,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  hyperlink: {
    color: Colors.linkText,
    textDecorationLine: 'underline',
  },
  termsInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.primaryBlue,
    paddingVertical: 25,
    paddingHorizontal: 15,
  },
  arrowContainer: {
    alignSelf: 'center',
    paddingRight: 20,
    paddingLeft: 20,
  },
});
