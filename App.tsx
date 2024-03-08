import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  EmptyScreen,
  FeedScreen,
  HelpScreen,
  HomeScreen,
  ProfileScreen,
  SettingsScreen,
} from './src/screens';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Stack = createNativeStackNavigator();

const App = () => {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn ? (
          // Screens for logged in users
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={EmptyScreen} />
          </Stack.Group>
        ) : (
          // Auth screens
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignIn" component={EmptyScreen} />
            <Stack.Screen name="SignUp" component={EmptyScreen} />
          </Stack.Group>
        )}
        {/* Common modal screens */}
        <Stack.Group
          screenOptions={{
            presentation: 'modal',
          }}>
          <Stack.Screen name="Help" component={HelpScreen} />
          <Stack.Screen name="Invite" component={EmptyScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
