import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View } from 'react-native';
import { isEmpty, first, last } from 'lodash'
import { useDispatch } from 'react-redux';
import * as homeActions from 'app/store/actions/homeActions';
import styles from './styles';
import MapView, { Region } from 'react-native-maps';
import { useFloodFeatureItems } from 'app/hooks/homeHooks';
import { IFeature } from 'app/models/api/home';
import { DEFAULT_REGION } from 'app/utils/constants';
import MarkItem from 'app/components/MarkItem';
import NavigationService, { navigationRef } from 'app/navigation/NavigationService';
import { Detail } from 'app/navigation/screens';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const floodFeatureItems = useFloodFeatureItems()
  const [region, setRegion] = useState(DEFAULT_REGION)
  const mapRef: any = useRef(undefined);

  useEffect(() => {
    dispatch(homeActions.requestFloodData());
  }, [dispatch]);

  const onRegionChangeComplete = useCallback((region: Region) => {
    setRegion(region)
  }, [setRegion])

  useEffect(() => {
    if (isEmpty(floodFeatureItems)) {
      return
    }
    const firstRegionCoordinates = first(floodFeatureItems)?.geometry?.coordinates ?? []
    if (!last(firstRegionCoordinates) || !first(firstRegionCoordinates)) {
      return
    }
    mapRef?.current?.animateToRegion({
      latitude: last(firstRegionCoordinates),
      longitude: first(firstRegionCoordinates),
      latitudeDelta: 0.1,
      longitudeDelta: 0.1
    })
  }, [floodFeatureItems])

  const onDetailNavigate = useCallback((item) => {
    NavigationService.navigate(Detail, { item })
  }, [])

  // We can do separately to another child component to enhance and reuse 
  const renderMapView = useMemo(() => {
    return (
      <>
        {floodFeatureItems.map((item: IFeature, index: number) => {
          return (
            <MarkItem key={`${index}`} item={item} onMarkPress={onDetailNavigate} />
          )
        })}
      </>
    )
  }, [floodFeatureItems])

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        zoomEnabled
        maxZoomLevel={100}
        minZoomLevel={1}
        onRegionChangeComplete={onRegionChangeComplete}
        initialRegion={region}>
        {renderMapView}
      </MapView>
    </View>
  );
};

export default Home;
