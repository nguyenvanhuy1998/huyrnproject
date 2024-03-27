import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SCREEN_NAMES} from '../constants';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREEN_NAMES.Main} component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
