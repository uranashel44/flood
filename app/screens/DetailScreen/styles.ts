import { Device } from 'app/utils/constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: Device.width * 0.7,
    marginTop: 56,
  },
  content: {
    paddingTop: Device.width * 0.8,
    width: '100%',
  }
});

export default styles;
