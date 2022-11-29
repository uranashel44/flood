import React, { useCallback, useMemo, useRef } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { first, last } from 'lodash'
import NavigationService from 'app/navigation/NavigationService';

import styles from './styles';
import MapView from 'react-native-maps';
import MarkItem from 'app/components/MarkItem';
import { LATITUDE_DELTA, LONGITUDE_DELTA } from 'app/utils/constants';
import FloodItem from 'app/components/FloodItem';
const DetailScreen: React.FC<any> = (props: { route }) => {
  const goBack = useCallback(() => NavigationService.goBack(), []);
  const mapRef: any = useRef(undefined);
  const { route } = props
  const { item } = route?.params
  const getCoordinates = useMemo(() => {
    const { coordinates } = item?.geometry ?? []
    return {
      latitude: last(coordinates),
      longitude: first(coordinates),
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }
  }, [item])
  const getItemData = useMemo(() => {
    return item
  }, [item])
  return (
    <View style={styles.container}>
      <Button icon="keyboard-backspace" mode="outlined" onPress={goBack}>
        Go Back
      </Button>
      <MapView
        ref={mapRef}
        style={styles.map}
        zoomEnabled
        maxZoomLevel={100}
        minZoomLevel={1}
        initialRegion={getCoordinates}>
        <MarkItem item={getItemData} />
      </MapView>
      <View style={styles.content}>
        <FloodItem item={getItemData} isDetail />
      </View>
    </View>
  );
};

export default DetailScreen;
