import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigators/AuthNavigator';
import {SplashScreen} from './src/screens';
import {StatusBar} from 'react-native';
import {COLORS} from './src/constants';
const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={COLORS.transparent}
        translucent
      />
      {isShowSplash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      )}
    </>
  );
};

export default App;
