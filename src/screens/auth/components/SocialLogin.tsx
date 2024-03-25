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
import {
  Settings,
  LoginButton,
  LoginManager,
  Profile,
} from 'react-native-fbsdk-next';
import {LoadingModal} from '../../../modals';
GoogleSignin.configure({
  webClientId:
    '385617953573-g9699rsb193o3uhtrdi297fc0qk9ktd1.apps.googleusercontent.com',
  iosClientId:
    '385617953573-k4jqtgettdt0un8e1fgv6f5i954upt86.apps.googleusercontent.com',
});
Settings.setAppID('926183692393868');

const SocialLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
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
  const handleLoginWithFacebook = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
      ]);
      if (result.isCancelled) {
        console.log('Login cancelled');
      } else {
        const profile = await Profile.getCurrentProfile();
        if (profile) {
          setIsLoading(true);
          console.log(profile);
          const data = {
            name: profile.name,
            givenName: profile.firstName,
            email: profile.userID,
            familyName: profile.lastName,

            photo: profile.imageURL,
          };
          const res: any = await authApi.HandleAuthentication(
            '/login-with-google',
            data,
            'post',
          );
          setIsLoading(false);
          dispatch(addAuth(res.data));
          await AsyncStorage.setItem('auth', JSON.stringify(res.data));
        }
      }
    } catch (error) {
      setIsLoading(false);
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
        onPress={handleLoginWithFacebook}
        type="primary"
        backgroundColor={COLORS.white}
        color={COLORS.text}
        text="Login with Facebook"
        icon={<Facebook />}
        iconFlex="left"
        textFont={FONT_FAMILY.regular}
      />
      <LoadingModal visible={isLoading} />
    </SectionComponent>
  );
};

export default SocialLogin;
