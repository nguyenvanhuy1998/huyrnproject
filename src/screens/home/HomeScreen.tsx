import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {removeAuth} from '../../redux/reducers/authReducer';
import {globalStyles} from '../../styles';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await AsyncStorage.clear();
    await GoogleSignin.signOut();
    dispatch(removeAuth());
  };
  return (
    <View style={globalStyles.containerCenter}>
      <Text>Home Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
