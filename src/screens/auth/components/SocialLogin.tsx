/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ButtonComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../../components';
import {COLORS, FONT_FAMILY} from '../../../constants';
import {Facebook, Google} from '../../../assets/svgs';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import authApi from '../../../api/authApi';
import {useDispatch} from 'react-redux';
import {addAuth} from '../../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
GoogleSignin.configure({
  webClientId:
    '385617953573-g9699rsb193o3uhtrdi297fc0qk9ktd1.apps.googleusercontent.com',
  iosClientId:
    '385617953573-k4jqtgettdt0un8e1fgv6f5i954upt86.apps.googleusercontent.com',
});
const SocialLogin = () => {
  const dispatch = useDispatch();
  const handleLoginWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      const res: any = await authApi.HandleAuthentication(
        '/login-with-google',
        userInfo.user,
        'post',
      );
      dispatch(addAuth(res.data));
      await AsyncStorage.setItem('auth', JSON.stringify(res.data));
    } catch (error) {
      console.log('error', error);
    }
  };
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
        onPress={handleLoginWithGoogle}
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
