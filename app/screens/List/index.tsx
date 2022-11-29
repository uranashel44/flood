import React, { useCallback } from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';
import { IHomeState } from 'app/models/reducers/home';
import { useFloodFeatureItems } from 'app/hooks/homeHooks';
import { IFeature } from 'app/models/api/home';
import FloodItem from 'app/components/FloodItem';
import { Detail } from 'app/navigation/screens';
import NavigationService from 'app/navigation/NavigationService';

interface IState {
  loginReducer: IHomeState;
}

const Login: React.FC = () => {
  const floodFeatureItems = useFloodFeatureItems()

  const onDetailNavigate = useCallback((item) => {
    NavigationService.navigate(Detail, { item })
  }, [])
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
      {floodFeatureItems.map((item: IFeature, index: number) => {
        return (
          <FloodItem onPress={onDetailNavigate} key={`${index}`} item={item} />
        )
      })}
    </ScrollView>
  );
};

export default Login;
