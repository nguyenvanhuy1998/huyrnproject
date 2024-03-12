import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {EmptyScreen, HomeScreen} from '../screens';

const Tab = createBottomTabNavigator();
const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Feed" component={EmptyScreen} />
      <Tab.Screen name="Notifications" component={EmptyScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
