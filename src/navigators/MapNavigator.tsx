import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SCREEN_NAMES} from '../constants';
import {MapScreen} from '../screens';

const Stack = createNativeStackNavigator();
const MapNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREEN_NAMES.Map} component={MapScreen} />
    </Stack.Navigator>
  );
};

export default MapNavigator;
