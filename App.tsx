import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/screens';
import {Button, Image, Text} from 'react-native';
const Stack = createNativeStackNavigator();

function LogoTitle() {
  return <Text>Logo Title</Text>;
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: props => <LogoTitle {...props} />,
            headerRight: () => <Button title="Update count" />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
