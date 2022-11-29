import { IFeature } from "app/models/api/home";
import React from "react";
import { first, last } from 'lodash'
import { StyleSheet } from "react-native";
import { Marker } from "react-native-maps";

const MarkItem = ({ item, onMarkPress }: { item: IFeature, onMarkPress?: (item: IFeature) => void }) => {
  const coordinates = item?.geometry?.coordinates ?? []
  const suburb = first(item?.properties?.roads)?.suburb ?? ""
  const longitude = first(coordinates)
  const latitude = last(coordinates)
  if (!longitude || !latitude || isNaN(latitude) || isNaN(longitude)) {
    return null
  }
  return (
    <Marker.Animated
      onPress={() => onMarkPress?.(item)}
      title={`${suburb}`}
      coordinate={{ latitude, longitude }}
    />
  )
}
export default MarkItem
