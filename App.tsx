import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {COLORS} from './src/constants';
import RootNavigator from './src/navigators/RootNavigator';
import store from './src/redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={COLORS.transparent}
        translucent
      />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
