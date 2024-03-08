import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from '../Feed/FeedScreen';
import MessagesScreen from '../Messages/MessagesScreen';

const Tab = createBottomTabNavigator();
const HomeScreen = ({navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
