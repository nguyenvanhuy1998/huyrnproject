import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAMES} from '../constants';
import {EventsScreen} from '../screens';

const Stack = createNativeStackNavigator();
const EventsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREEN_NAMES.Events} component={EventsScreen} />
    </Stack.Navigator>
  );
};

export default EventsNavigator;
