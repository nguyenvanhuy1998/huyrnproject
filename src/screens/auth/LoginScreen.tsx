/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {globalStyles} from '../../styles';
import {ButtonComponent} from '../../components';

const LoginScreen = () => {
  const handleSubmit = async () => {
    await AsyncStorage.setItem('accessToken', 'ababaabababa');
  };
  return (
    <View style={[globalStyles.container, {padding: 16}]}>
      <Text>Login Screen</Text>
      <ButtonComponent
        text="forget password"
        onPress={() => console.log('Login')}
        type="text"
        icon={
          <View>
            <Text>N</Text>
          </View>
        }
      />
    </View>
  );
};

export default LoginScreen;
