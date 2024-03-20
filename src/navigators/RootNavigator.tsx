import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {addAuth, authSelector} from '../redux/reducers/authReducer';

const RootNavigator = () => {
  const {getItem} = useAsyncStorage('auth');
  const auth = useSelector(authSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    const checkLogin = async () => {
      const res = await getItem();
      console.log('resLogin', res);
      res && dispatch(addAuth(JSON.parse(res)));
    };
    checkLogin();
  }, [getItem, dispatch]);

  return auth.accessToken ? <MainNavigator /> : <AuthNavigator />;
};

export default RootNavigator;
