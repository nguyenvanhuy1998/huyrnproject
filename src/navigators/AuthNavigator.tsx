import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SCREEN_NAMES} from '../constants';
import {
  ForgotPasswordScreen,
  LoginScreen,
  OnboardingScreen,
  SignUpScreen,
  VerificationScreen,
} from '../screens';

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
      <Stack.Screen name={SCREEN_NAMES.SignUp} component={SignUpScreen} />
      <Stack.Screen
        name={SCREEN_NAMES.ForgotPassword}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name={SCREEN_NAMES.Verification}
        component={VerificationScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
