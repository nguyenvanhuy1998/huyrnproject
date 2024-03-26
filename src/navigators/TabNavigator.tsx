import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREEN_NAMES} from '../constants';
import {AddNewScreen} from '../screens';
import EventsNavigator from './EventsNavigator';
import ExploreNavigator from './ExploreNavigator';
import MapNavigator from './MapNavigator';
import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={SCREEN_NAMES.ExploreTab} component={ExploreNavigator} />
      <Tab.Screen name={SCREEN_NAMES.EventsTab} component={EventsNavigator} />
      <Tab.Screen
        name={SCREEN_NAMES.AddNew}
        component={AddNewScreen}
        options={{
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen name={SCREEN_NAMES.MapTab} component={MapNavigator} />
      <Tab.Screen name={SCREEN_NAMES.ProfileTab} component={ProfileNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
