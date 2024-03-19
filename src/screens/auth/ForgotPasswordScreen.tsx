import {View, Text} from 'react-native';
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

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  return (
    <ContainerComponent isImageBackground back>
      <SectionComponent>
        <TextComponent text="Reset Password" title />
        <TextComponent text="Please enter your email address to request a password reset" />
        <SpaceComponent height={26} />
        <InputComponent
          placeholder="abc@gmail.com"
          value={email}
          onChangeText={val => setEmail(val)}
          prefix={<Sms size={20} color={COLORS.gray} />}
        />
      </SectionComponent>
      <SectionComponent>
        <ButtonComponent
          text="Send"
          type="primary"
          icon={<ArrowRight size={20} color={COLORS.white} />}
          iconFlex="right"
        />
      </SectionComponent>
    </ContainerComponent>
  );
};

export default ForgotPasswordScreen;
