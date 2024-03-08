import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Button, Text, View} from 'react-native';
import ProfileScreen from '../Profile/ProfileScreen';
import EmptyScreen from '../Empty/EmptyScreen';

const Tab = createBottomTabNavigator();
const HomeScreen = ({navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={EmptyScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
