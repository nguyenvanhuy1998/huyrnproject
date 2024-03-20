import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addAuth, authSelector} from '../redux/reducers/authReducer';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import {SplashScreen} from '../screens';

const RootNavigator = () => {
  const {getItem} = useAsyncStorage('auth');
  const [isShowSplash, setIsShowSplash] = useState(true);

  const auth = useSelector(authSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    const checkLogin = async () => {
      const res = await getItem();
      res && dispatch(addAuth(JSON.parse(res)));
    };
    checkLogin();
  }, [getItem, dispatch]);

  return isShowSplash ? (
    <SplashScreen />
  ) : auth.accessToken ? (
    <MainNavigator />
  ) : (
    <AuthNavigator />
  );
};

export default RootNavigator;
