import React, { useEffect, useState } from 'react';
import {
  View,
  ViewStyle,
  TouchableOpacity,
  StyleSheet,
  Alert,
  BackHandler,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import { NavigationBarWrapper } from '../../components/NavigationBarWrapper';
import { Typography } from '../../components/Typography';
import { BTNativeModule } from '../../bt';
import { NavigationProp, Screens } from '../../navigation';

import { Colors, Spacing } from '../../styles';

type ENDebugMenuProps = {
  navigation: NavigationProp;
};

const DEBUG_VERIFICATION_CODE = '111111';

const ENDebugMenu = ({ navigation }: ENDebugMenuProps): JSX.Element => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleBackPress = () => {
      navigation.goBack();
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [navigation]);

  const backToSettings = () => {
    navigation.goBack();
  };

  const showErrorAlert = (errorString: string) => {
    Alert.alert('Error', errorString, [{ text: 'OK' }], {
      cancelable: false,
    });
  };

  const showSuccessAlert = (messageString: string) => {
    Alert.alert(
      'Success',
      messageString,
      [
        {
          text: 'OK',
        },
      ],
      { cancelable: false },
    );
  };

  const handleOnPressSimulationButton = (
    callSimulatedEvent: (
      cb: (errorString: string | null, successString: string | null) => void,
    ) => void,
  ) => {
    return () => {
      // Update loading state
      setLoading(true);

      const cb = (errorString: string | null, successString: string | null) => {
        // Update loading state
        setLoading(false);

        if (errorString) {
          showErrorAlert(errorString);
        } else if (successString) {
          showSuccessAlert(successString);
        } else {
          showSuccessAlert('success');
        }
      };
      callSimulatedEvent(cb);
    };
  };

  const showDebugVerificationCode = () => {
    Alert.alert(
      'Debug Verification Code:',
      DEBUG_VERIFICATION_CODE,
      [
        {
          text: 'OK',
        },
      ],
      { cancelable: false },
    );
  };

  interface DebugMenuListItemProps {
    label: string;
    onPress: () => void;
    style?: ViewStyle;
  }

  const DebugMenuListItem = ({
    label,
    onPress,
    style,
  }: DebugMenuListItemProps) => {
    return (
      <TouchableOpacity style={[styles.listItem, style]} onPress={onPress}>
        <Typography use={'body1'}>{label}</Typography>
      </TouchableOpacity>
    );
  };

  return (
    <NavigationBarWrapper title={'EN Debug Menu'} onBackPress={backToSettings}>
      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <ScrollView>
          <View style={styles.section}>
            <DebugMenuListItem
              label='Reset Exposures'
              style={styles.lastListItem}
              onPress={handleOnPressSimulationButton(
                BTNativeModule.resetExposures,
              )}
            />
          </View>
          <View style={styles.section}>
            <DebugMenuListItem
              label='Detect Exposures Now'
              onPress={handleOnPressSimulationButton(
                BTNativeModule.detectExposuresNow,
              )}
            />
            <DebugMenuListItem
              label='Simulate Exposure Detection Error'
              onPress={handleOnPressSimulationButton(
                BTNativeModule.simulateExposureDetectionError,
              )}
            />
            <DebugMenuListItem
              label='Simulate Exposure'
              onPress={handleOnPressSimulationButton(
                BTNativeModule.simulateExposure,
              )}
            />
            <DebugMenuListItem
              label='Show Debug Verification Code'
              onPress={showDebugVerificationCode}
            />
            <DebugMenuListItem
              label='Toggle Exposure Notifications'
              onPress={handleOnPressSimulationButton(
                BTNativeModule.toggleExposureNotifications,
              )}
            />
            <DebugMenuListItem
              label='Reset Exposure Detection Error'
              onPress={handleOnPressSimulationButton(
                BTNativeModule.resetExposureDetectionError,
              )}
            />
          </View>
          <View style={styles.section}>
            <DebugMenuListItem
              label='Show Local Diagnosis Keys'
              onPress={() => {
                navigation.navigate(Screens.ENLocalDiagnosisKey);
              }}
            />
            <DebugMenuListItem
              label='Get and Post Diagnosis Keys'
              style={styles.lastListItem}
              onPress={handleOnPressSimulationButton(
                BTNativeModule.getAndPostDiagnosisKeys,
              )}
            />
          </View>
        </ScrollView>
      )}
    </NavigationBarWrapper>
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.small,
    marginBottom: Spacing.medium,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.tertiaryViolet,
  },
  listItem: {
    flex: 1,
    paddingVertical: Spacing.medium,
    borderBottomWidth: 1,
    borderColor: Colors.tertiaryViolet,
  },
  lastListItem: {
    borderBottomWidth: 0,
  },
});

export default ENDebugMenu;
