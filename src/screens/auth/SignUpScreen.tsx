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
import {COLORS, SCREEN_NAMES} from '../../constants';
import {LoadingModal} from '../../modals';
import {SocialLogin} from './components';
import authApi from '../../api/authApi';
import {Validate} from '../../utils/validate';
import {useDispatch} from 'react-redux';
import {addAuth} from '../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ErrorMessage {
  email?: string;
  password?: string;
  confirmPassword?: string;
}
const initValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const SignUpScreen = ({navigation}: any) => {
  const [values, setValues] = useState(initValues);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<any>();
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      !errorMessage ||
      (errorMessage &&
        (errorMessage.email ||
          errorMessage.password ||
          errorMessage.confirmPassword) &&
        (!values.email || !values.password || !values.confirmPassword))
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [errorMessage, values]);

  const handleChangeValue = (key: string, value: string) => {
    const data: any = {...values};
    data[key] = value;
    setValues(data);
  };
  const formValidator = (key: string) => {
    const data = {...errorMessage};
    let message = '';
    switch (key) {
      case 'email':
        if (!values.email) {
          message = 'Email is required';
        } else if (!Validate.email(values.email)) {
          message = 'Email is not valid';
        } else {
          message = '';
        }
        break;
      case 'password':
        message = !values.password ? 'Password is required' : '';
        break;
      case 'confirmPassword':
        if (!values.confirmPassword) {
          message = 'Please enter your confirm password';
        } else if (values.confirmPassword !== values.password) {
          message = 'Passwords do not match';
        } else {
          message = '';
        }
        break;
    }
    data[key] = message;
    setErrorMessage(data);
  };
  const handleRegister = async () => {
    setIsLoading(true);
    try {
      const res = await authApi.HandleAuthentication(
        '/verifyOtp',
        {
          email: values.email,
        },
        'post',
      );
      console.log(res);
      setIsLoading(false);
      navigation.navigate(SCREEN_NAMES.Verification, {
        code: res.data.code,
        ...values,
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
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
          onEnd={() => formValidator('email')}
        />
        <InputComponent
          placeholder="Your password"
          value={values.password}
          allowClear
          isPassword
          onChangeText={value => handleChangeValue('password', value)}
          prefix={<Lock size={22} color={COLORS.gray} />}
          onEnd={() => formValidator('password')}
        />
        <InputComponent
          placeholder="Confirm password"
          value={values.confirmPassword}
          allowClear
          isPassword
          onChangeText={value => handleChangeValue('confirmPassword', value)}
          prefix={<Lock size={22} color={COLORS.gray} />}
          onEnd={() => formValidator('confirmPassword')}
        />
      </SectionComponent>

      {errorMessage &&
        (errorMessage.email ||
          errorMessage.password ||
          errorMessage.confirmPassword) && (
          <SectionComponent>
            {Object.keys(errorMessage).map((error, index) => {
              return (
                errorMessage[error] && (
                  <TextComponent
                    key={`error${index}`}
                    text={errorMessage[`${error}`]}
                    color={COLORS.dangerous}
                  />
                )
              );
            })}
          </SectionComponent>
        )}
      <SpaceComponent height={16} />
      <SectionComponent>
        <ButtonComponent
          disabled={isDisabled}
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
