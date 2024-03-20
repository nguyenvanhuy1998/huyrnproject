import React from 'react';
import {Button, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {globalStyles} from '../../styles';
import {useDispatch} from 'react-redux';
import {removeAuth} from '../../redux/reducers/authReducer';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    dispatch(removeAuth());
    await AsyncStorage.clear();
  };
  return (
    <View style={globalStyles.containerCenter}>
      <Text>Home Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
