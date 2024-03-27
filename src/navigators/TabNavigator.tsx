/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AddSquare, Calendar, Location, Profile} from 'iconsax-react-native';
import React, {ReactNode} from 'react';
import {Platform, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CircleComponent, TextComponent} from '../components';
import {COLORS, SCREEN_NAMES} from '../constants';
import {AddNewScreen} from '../screens';
import {globalStyles} from '../styles';
import EventsNavigator from './EventsNavigator';
import ExploreNavigator from './ExploreNavigator';
import MapNavigator from './MapNavigator';
import ProfileNavigator from './ProfileNavigator';
import DrawerNavigator from './DrawerNavigator';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 88 : 68,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.white,
        },
        tabBarIcon: ({focused, color, size}) => {
          let icon: ReactNode;
          color = focused ? COLORS.primary : COLORS.gray5;
          size = 24;
          switch (route.name) {
            case SCREEN_NAMES.ExploreTab:
              icon = <MaterialIcons name="explore" size={23} color={color} />;
              break;
            case SCREEN_NAMES.EventsTab:
              icon = <Calendar size={size} color={color} variant="Bold" />;
              break;
            case SCREEN_NAMES.AddNew:
              icon = (
                <CircleComponent
                  size={52}
                  onPress={() => {}}
                  styles={[
                    globalStyles.shadow,
                    {
                      marginTop: Platform.OS === 'ios' ? -50 : -60,
                    },
                  ]}>
                  <AddSquare size={24} color={COLORS.white} variant="Bold" />
                </CircleComponent>
              );
              break;
            case SCREEN_NAMES.MapTab:
              icon = <Location size={size} color={color} variant="Bold" />;
              break;
            case SCREEN_NAMES.ProfileTab:
              icon = <Profile size={size} color={color} variant="Bold" />;
              break;
          }
          return icon;
        },
        tabBarIconStyle: {
          marginTop: 8,
        },
        tabBarLabel: ({focused}) => {
          let name = '';
          switch (route.name) {
            case SCREEN_NAMES.ExploreTab:
              name = 'Explore';
              break;
            case SCREEN_NAMES.EventsTab:
              name = 'Events';
              break;
            case SCREEN_NAMES.MapTab:
              name = 'Map';
              break;
            case SCREEN_NAMES.ProfileTab:
              name = 'Profile';
              break;
          }
          return route.name === SCREEN_NAMES.AddNew ? null : (
            <TextComponent
              text={name}
              fontSize={12}
              color={focused ? COLORS.primary : COLORS.gray}
              styles={{
                marginBottom: Platform.OS === 'android' ? 12 : 0,
              }}
            />
          );
        },
      })}>
      <Tab.Screen name={SCREEN_NAMES.ExploreTab} component={ExploreNavigator} />
      <Tab.Screen name={SCREEN_NAMES.EventsTab} component={EventsNavigator} />
      <Tab.Screen name={SCREEN_NAMES.AddNew} component={AddNewScreen} />
      <Tab.Screen name={SCREEN_NAMES.MapTab} component={MapNavigator} />
      <Tab.Screen name={SCREEN_NAMES.ProfileTab} component={ProfileNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
