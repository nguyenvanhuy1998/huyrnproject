import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAMES} from '../constants';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREEN_NAMES.Main} component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
