import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {
  AccountScreen,
  FeedScreen,
  ProfileScreen,
  SettingsScreen,
} from './src/screens';

const RootStack = createNativeStackNavigator();
const FeedStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const getHeaderTitle = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  switch (routeName) {
    case 'Feed':
      return 'News feed';
    case 'Profile':
      return 'My profile';
    case 'Account':
      return 'My account';
  }
};
const FeedStackScreen = () => {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="Feed" component={FeedScreen} />
      {/* other screen */}
    </FeedStack.Navigator>
  );
};
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      {/* other screen */}
    </ProfileStack.Navigator>
  );
};
const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Feed" component={FeedStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name="Home" component={HomeTabs} />
        <RootStack.Screen name="Settings" component={SettingsScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
