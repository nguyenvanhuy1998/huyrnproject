/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ButtonComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../../components';
import {COLORS, FONT_FAMILY} from '../../../constants';
import {Facebook, Google} from '../../../assets/svgs';

const SocialLogin = () => {
  return (
    <SectionComponent>
      <TextComponent
        styles={{textAlign: 'center'}}
        text="OR"
        color={COLORS.gray4}
        fontSize={16}
      />
      <SpaceComponent height={16} />
      <ButtonComponent
        type="primary"
        backgroundColor={COLORS.white}
        color={COLORS.text}
        text="Login with Google"
        icon={<Google />}
        textFont={FONT_FAMILY.regular}
        iconFlex="left"
      />
      <ButtonComponent
        type="primary"
        backgroundColor={COLORS.white}
        color={COLORS.text}
        text="Login with Facebook"
        icon={<Facebook />}
        iconFlex="left"
        textFont={FONT_FAMILY.regular}
      />
    </SectionComponent>
  );
};

export default SocialLogin;
