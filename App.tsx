import React from 'react';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native';

const Stack = createNativeStackNavigator();
const FocusAwareStatusBar = props => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
};
const Screen1 = ({navigation}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: '#6a51ae',
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Text style={{color: '#fff'}}>Light Screen</Text>
      <Button
        title="Next screen"
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
};
const Screen2 = ({navigation}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: '#ecf0f1',
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}>
      <FocusAwareStatusBar
        barStyle={'dark-content'}
        backgroundColor={'#ecf0f1'}
      />
      <Text>Dark Screen</Text>
      <Button
        title="Next screen"
        onPress={() => navigation.navigate('Screen1')}
      />
    </View>
  );
};
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
