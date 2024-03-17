import React from 'react';
import {Button, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {globalStyles} from '../../styles';

const LoginScreen = () => {
  const handleSubmit = async () => {
    await AsyncStorage.setItem('accessToken', 'ababaabababa');
  };
  return (
    <View style={globalStyles.containerCenter}>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={handleSubmit} />
    </View>
  );
};

export default LoginScreen;
