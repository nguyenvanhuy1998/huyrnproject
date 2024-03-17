import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAMES} from '../constants';
import {LoginScreen, OnboardingScreen} from '../screens';

const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={SCREEN_NAMES.Onboarding}
        component={OnboardingScreen}
      />
      <Stack.Screen name={SCREEN_NAMES.Login} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
