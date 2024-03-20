import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAMES} from '../constants';
import {
  ForgotPasswordScreen,
  LoginScreen,
  OnboardingScreen,
  SignUpScreen,
  VerificationScreen,
} from '../screens';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  // const [isExistingUser, setIsExistingUser] = useState(false);
  // useEffect(() => {
  //   const checkIsExistingUser = async () => {
  //     const res = await AsyncStorage.getItem('auth');
  //     res && setIsExistingUser(true);
  //   };
  //   checkIsExistingUser();
  // }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* {!isExistingUser && ( */}
      <Stack.Screen
        name={SCREEN_NAMES.Onboarding}
        component={OnboardingScreen}
      />
      {/* )} */}
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
