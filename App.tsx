import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import AuthNavigator from './src/navigators/AuthNavigator';
import {SplashScreen} from './src/screens';
import {StatusBar} from 'react-native';
import {COLORS} from './src/constants';
import MainNavigator from './src/navigators/MainNavigator';
const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);
  const [accessToken, setAccessToken] = useState('');
  const {getItem, setItem} = useAsyncStorage('accessToken');
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    const checkLogin = async () => {
      const token = await getItem();
      token && setAccessToken(token);
    };
    checkLogin();
  }, [getItem]);

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
          {accessToken ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      )}
    </>
  );
};

export default App;
