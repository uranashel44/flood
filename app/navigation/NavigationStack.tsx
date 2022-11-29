/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { NavigationContainer, StackActions, Theme } from '@react-navigation/native';
import { navigationRef } from './NavigationService';
import List from 'app/screens/List';
import Home from 'app/screens/Home';
import { StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from 'app/screens/DetailScreen';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Map" component={Home} />
      <Tab.Screen name="List" component={List} />
    </Tab.Navigator>
  );
}

interface IProps {
  theme: Theme;
}

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="TabBar">
        <Stack.Screen name="TabBar"
          component={TabBar} />
        <Stack.Screen name="Detail"
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
