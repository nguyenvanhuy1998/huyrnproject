import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
function A() {
  return <View />;
}

function B() {
  return <View />;
}
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="A" component={A} />
    </HomeStack.Navigator>
  );
};
const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <HomeStack.Screen name="B" component={B} />
    </SettingsStack.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home!',
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{
            tabBarLabel: 'Settings!',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
