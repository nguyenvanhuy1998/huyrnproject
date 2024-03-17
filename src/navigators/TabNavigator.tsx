import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREEN_NAMES} from '../constants';
import {HomeScreen} from '../screens';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={SCREEN_NAMES.Home} component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
