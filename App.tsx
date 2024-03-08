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
const Drawer = createDrawerNavigator();

const Root = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Root">
        <Drawer.Screen name="Root" component={Root} />
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
