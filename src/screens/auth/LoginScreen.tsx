/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, Switch} from 'react-native';
import {Lock, Sms} from 'iconsax-react-native';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {COLORS, images, SCREEN_NAMES} from '../../constants';
import {SocialLogin} from './components';
import authApi from '../../api/authApi';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(true);
  const handleLogin = async () => {
    try {
      const res = await authApi.HandleAuthentication('/hello');
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ContainerComponent isImageBackground isScroll>
      <SectionComponent
        styles={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={images.textLogo}
          style={{
            marginTop: 75,
            width: 162,
            height: 114,
            marginBottom: 30,
          }}
        />
      </SectionComponent>
      <SectionComponent>
        <TextComponent title text="Sign in" />
        <SpaceComponent height={21} />
        <InputComponent
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
        />
        <RowComponent justify="space-between">
          <RowComponent onPress={() => setIsRemember(!isRemember)}>
            <Switch
              trackColor={{true: COLORS.primary}}
              thumbColor={COLORS.white}
              value={isRemember}
              onChange={() => setIsRemember(!isRemember)}
            />
            <TextComponent text="Remember Me" />
          </RowComponent>
          <ButtonComponent
            text="Forgot Password?"
            onPress={() => navigation.navigate(SCREEN_NAMES.ForgotPassword)}
            type="text"
          />
        </RowComponent>
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent>
        <ButtonComponent text="SIGN IN" type="primary" onPress={handleLogin} />
      </SectionComponent>
      <SocialLogin />
      <SectionComponent>
        <RowComponent justify="center">
          <TextComponent text="Don't have an account? " />
          <ButtonComponent
            type="link"
            text="Sign up"
            onPress={() => navigation.navigate(SCREEN_NAMES.SignUp)}
          />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default LoginScreen;
