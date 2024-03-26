import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAMES} from '../constants';
import {ProfileScreen} from '../screens';

const Stack = createNativeStackNavigator();
const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREEN_NAMES.Profile} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
