import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {ArrowRight, Sms} from 'iconsax-react-native';
import {COLORS} from '../../constants';
import {Validate} from '../../utils/validate';
import authApi from '../../api/authApi';
import {LoadingModal} from '../../modals';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const handleCheckEmail = () => {
    const isValidateEmail = Validate.email(email);
    setDisabled(!isValidateEmail);
  };
  const handleForgotPassword = async () => {
    setIsLoading(true);
    try {
      const res = await authApi.HandleAuthentication(
        '/forgotPassword',
        {
          email,
        },
        'post',
      );
      console.log(res);
      setIsLoading(false);
      Alert.alert('Send mail', 'We sended email includes new password');
    } catch (error) {
      setIsLoading(false);
      console.log('Cannot create new password api forgot password', error);
    }
  };
  return (
    <ContainerComponent isImageBackground back>
      <SectionComponent>
        <TextComponent text="Reset Password" title />
        <SpaceComponent height={12} />
        <TextComponent text="Please enter your email address to request a password reset" />
        <SpaceComponent height={26} />
        <InputComponent
          placeholder="abc@gmail.com"
          value={email}
          onChangeText={val => setEmail(val)}
          prefix={<Sms size={20} color={COLORS.gray} />}
          onEnd={handleCheckEmail}
        />
      </SectionComponent>
      <SectionComponent>
        <ButtonComponent
          disabled={disabled}
          text="Send"
          type="primary"
          icon={<ArrowRight size={20} color={COLORS.white} />}
          iconFlex="right"
          onPress={handleForgotPassword}
        />
      </SectionComponent>
      <LoadingModal visible={isLoading} />
    </ContainerComponent>
  );
};

export default ForgotPasswordScreen;
