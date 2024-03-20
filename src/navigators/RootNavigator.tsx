import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addAuth, authSelector} from '../redux/reducers/authReducer';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const RootNavigator = () => {
  const {getItem} = useAsyncStorage('auth');
  const auth = useSelector(authSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    const checkLogin = async () => {
      const res = await getItem();
      res && dispatch(addAuth(JSON.parse(res)));
    };
    checkLogin();
  }, [getItem, dispatch]);

  return auth.accessToken ? <MainNavigator /> : <AuthNavigator />;
};

export default RootNavigator;
