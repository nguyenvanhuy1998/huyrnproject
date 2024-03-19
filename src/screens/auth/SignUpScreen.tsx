/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {Lock, Sms, User} from 'iconsax-react-native';
import React, {useState} from 'react';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {COLORS} from '../../constants';
import {SocialLogin} from './components';

const initValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const SignUpScreen = ({navigation}: any) => {
  const [values, setValues] = useState(initValues);
  const handleChangeValue = (key: string, value: string) => {
    const data: any = {...values};
    data[key] = value;
    setValues(data);
  };
  return (
    <ContainerComponent isImageBackground isScroll back>
      <SectionComponent>
        <TextComponent title text="Sign up" />
        <SpaceComponent height={21} />
        <InputComponent
          placeholder="Full name"
          value={values.fullName}
          allowClear
          onChangeText={value => handleChangeValue('fullName', value)}
          prefix={<User size={22} color={COLORS.gray} />}
        />
        <InputComponent
          placeholder="Email"
          value={values.email}
          allowClear
          keyboardType="email-address"
          onChangeText={value => handleChangeValue('email', value)}
          prefix={<Sms size={22} color={COLORS.gray} />}
        />
        <InputComponent
          placeholder="Your password"
          value={values.password}
          allowClear
          isPassword
          onChangeText={value => handleChangeValue('password', value)}
          prefix={<Lock size={22} color={COLORS.gray} />}
        />
        <InputComponent
          placeholder="Confirm password"
          value={values.confirmPassword}
          allowClear
          isPassword
          onChangeText={value => handleChangeValue('confirmPassword', value)}
          prefix={<Lock size={22} color={COLORS.gray} />}
        />
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent>
        <ButtonComponent text="SIGN UP" type="primary" />
      </SectionComponent>
      <SocialLogin />
      <SectionComponent>
        <RowComponent justify="center">
          <TextComponent text="Don't have an account? " />
          <ButtonComponent
            type="link"
            text="Sign in"
            onPress={() => navigation.goBack()}
          />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default SignUpScreen;
