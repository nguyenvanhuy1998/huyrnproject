/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {Lock, Sms, User} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
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
import {LoadingModal} from '../../modals';
import {SocialLogin} from './components';
import authApi from '../../api/authApi';
import {Validate} from '../../utils/validate';
import {useDispatch} from 'react-redux';
import {addAuth} from '../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const SignUpScreen = ({navigation}: any) => {
  const [values, setValues] = useState(initValues);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    if (values.email || values.password || values.confirmPassword) {
      setErrorMessage('');
    }
  }, [values.email, values.password, values.confirmPassword]);

  const handleChangeValue = (key: string, value: string) => {
    const data: any = {...values};
    data[key] = value;
    setValues(data);
  };
  const handleRegister = async () => {
    const {email, password, confirmPassword} = values;
    const emailValidation = Validate.email(email);
    const passwordValidation = Validate.password(password);

    if (email && password && confirmPassword) {
      if (emailValidation && passwordValidation) {
        setErrorMessage('');
        setIsLoading(true);
        try {
          const res = await authApi.HandleAuthentication(
            '/register',
            {
              fullName: values.fullName,
              email,
              password,
            },
            'post',
          );

          dispatch(addAuth(res.data));
          await AsyncStorage.setItem('auth', JSON.stringify(res.data));
          setIsLoading(false);
        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      } else {
        setErrorMessage('Email not correct!!!');
      }
    } else {
      setErrorMessage('Vui lòng nhập đầy đủ thông tin');
    }
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

      {errorMessage && (
        <SectionComponent>
          <TextComponent text={errorMessage} color={COLORS.dangerous} />
        </SectionComponent>
      )}
      <SpaceComponent height={16} />
      <SectionComponent>
        <ButtonComponent
          text="SIGN UP"
          type="primary"
          onPress={handleRegister}
        />
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
      <LoadingModal visible={isLoading} />
    </ContainerComponent>
  );
};

export default SignUpScreen;
