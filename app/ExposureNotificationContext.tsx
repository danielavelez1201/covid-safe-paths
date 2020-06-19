import React, { createContext, useState, useEffect } from 'react';

import { BTNativeModule } from './bt';

type Enablement = `DISABLED` | `ENABLED`;
type Authorization = `UNAUTHORIZED` | `AUTHORIZED`;

export type DeviceStatus = [Authorization, Enablement];

interface ExposureNotificationsState {
  deviceStatus: DeviceStatus;
  requestENAuthorization: () => void;
  isENAuthorizedAndEnabled: () => boolean;
}

const initialStatus: DeviceStatus = ['UNAUTHORIZED', 'DISABLED'];

const initialState = {
  deviceStatus: initialStatus,
  requestENAuthorization: () => {},
  isENAuthorizedAndEnabled: () => false,
};

const ExposureNotificationsContext = createContext<ExposureNotificationsState>(
  initialState,
);

interface ExposureNotificationProviderProps {
  children: JSX.Element;
}

const ExposureNotificationsProvider = ({
  children,
}: ExposureNotificationProviderProps): JSX.Element => {
  const [deviceStatus, setDeviceStatus] = useState<DeviceStatus>(initialStatus);

  useEffect(() => {
    const subscription = BTNativeModule.subscribeToEnabledStatusEvents(
      (status: DeviceStatus) => {
        setDeviceStatus(status);
      },
    );

    return () => {
      subscription?.remove();
    };
  }, []);

  const requestENAuthorization = () => {
    const cb = (deviceStatus: DeviceStatus) => {
      setDeviceStatus(deviceStatus);
    };
    BTNativeModule.requestAuthorization(cb);
  };

  const isENAuthorizedAndEnabled = () => {
    return deviceStatus[0] === 'AUTHORIZED' && deviceStatus[1] === 'ENABLED';
  };

  return (
    <ExposureNotificationsContext.Provider
      value={{
        deviceStatus,
        requestENAuthorization,
        isENAuthorizedAndEnabled,
      }}>
      {children}
    </ExposureNotificationsContext.Provider>
  );
};

export { ExposureNotificationsProvider };
export default ExposureNotificationsContext;
