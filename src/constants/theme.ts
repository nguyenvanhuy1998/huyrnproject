import {Dimensions} from 'react-native';

interface Color {
  primary: string;
  white: string;
  white_opacity_20: string;
  text: string;
  gray: string;
  gray2: string;
  gray3: string;
  gray4: string;
  transparent: 'transparent';
}
interface Spacing {
  width: number;
  height: number;
}
interface ScreenName {
  Main: 'Main';
  Login: 'LoginScreen';
  Home: 'HomeScreen';
  Onboarding: 'OnboardingScreen';
  SignUp: 'SignUpScreen';
  ForgotPassword: 'ForgotPasswordScreen';
  Verification: 'VerificationScreen';
}
interface FontFamily {
  regular: string;
  medium: string;
  semiBold: string;
  bold: string;
}

export const COLORS: Color = {
  primary: '#5669FF',
  white: '#fff',
  white_opacity_20: 'rgba(255, 255, 255, 0.2)',
  text: '#120D26',
  gray: '#807A7A',
  gray2: '#DADADA',
  gray3: '#E4DFDF',
  gray4: '#9d9898',
  transparent: 'transparent',
};
export const SCREEN_NAMES: ScreenName = {
  Main: 'Main',
  Home: 'HomeScreen',
  Login: 'LoginScreen',
  Onboarding: 'OnboardingScreen',
  SignUp: 'SignUpScreen',
  ForgotPassword: 'ForgotPasswordScreen',
  Verification: 'VerificationScreen',
};
export const SPACING: Spacing = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
export const FONT_FAMILY: FontFamily = {
  regular: 'AirbnbCereal_W_Lt',
  medium: 'AirbnbCereal_W_Md',
  semiBold: 'AirbnbCereal_W_Bd',
  bold: 'AirbnbCereal_W_XBd',
};
