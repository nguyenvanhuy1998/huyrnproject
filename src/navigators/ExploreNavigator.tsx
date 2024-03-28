import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAMES} from '../constants';
import {HomeScreen, SearchEventsScreen} from '../screens';

const Stack = createNativeStackNavigator();
const ExploreNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREEN_NAMES.Home} component={HomeScreen} />
      <Stack.Screen
        name={SCREEN_NAMES.SearchEvents}
        component={SearchEventsScreen}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
