import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, ProfileScreen} from './src/screens';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'My home'}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({route}) => ({title: route.params.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
