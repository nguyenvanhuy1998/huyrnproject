/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View} from 'react-native';
import {globalStyles} from '../../styles';
import {
  ContainerComponent,
  InputComponent,
  TextComponent,
} from '../../components';
import {Lock, Sms} from 'iconsax-react-native';
import {COLORS} from '../../constants';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ContainerComponent isImageBackground>
      <TextComponent text="qweqweqwe" />
      {/* <InputComponent
        placeholder="Email"
        value={email}
        allowClear
        onChangeText={value => setEmail(value)}
        prefix={<Sms size={22} color={COLORS.gray} />}
      />
      <InputComponent
        placeholder="Password"
        value={password}
        allowClear
        isPassword
        onChangeText={value => setPassword(value)}
        prefix={<Lock size={22} color={COLORS.gray} />}
      /> */}
    </ContainerComponent>
  );
};

export default LoginScreen;
