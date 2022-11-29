import { Dimensions } from 'react-native';

export const Device = Dimensions.get('window');

export const ASPECT_RATIO = Device.width / Device.height;
export const LATITUDE = 37.78825;
export const LONGITUDE = -122.4324;
export const LATITUDE_DELTA = 0.0922;
export const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const DEFAULT_REGION = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

