import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  EmptyScreen,
  FeedScreen,
  HomeScreen,
  ProfileScreen,
  SettingsScreen,
} from './src/screens';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EditPost" component={EmptyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
