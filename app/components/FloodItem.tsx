import images from "app/config/images";
import { IFeature, IProperties } from "app/models/api/home";
import { colors } from "app/utils/colors";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const FloodItem = ({ item, onPress, isDetail }: { item: IFeature, onPress?: (item: IFeature) => void, isDetail?: boolean }) => {
  const { properties } = item
  return (
    <TouchableOpacity onPress={() => onPress?.(item)} style={styles.container}>
      <Image source={images.icons.logo} resizeMode="contain" style={styles.img} />
      <View style={styles.content}>
        <Text>{`1. Suburb: ${properties?.roads?.[0].suburb}`}</Text>
        <Text>{`2. Main street: ${properties?.roads?.[0]?.mainStreet}`}</Text>
        {isDetail &&
          <>
            <Text>{`3. Advice: \n\t - ${properties.adviceA}\n\t - ${properties.adviceB}\n\t - ${properties.adviceC}`}</Text>
            <Text>{`4. Other advise: ${properties?.otherAdvice}`}</Text>
            <Text>{`5. Diversions:\n${properties?.diversions}`}</Text>
          </>
        }
      </View>
    </TouchableOpacity>
  )
}
export default FloodItem

const styles = StyleSheet.create({
  img: {
    height: 40,
    width: 40
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    paddingTop: 16,
    borderBottomColor: colors.grey,
    borderBottomWidth: 0.2,
  }
})