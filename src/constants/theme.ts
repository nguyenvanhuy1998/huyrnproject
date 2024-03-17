import {Dimensions} from 'react-native';

interface Color {
  primary: string;
  white: string;
  white_opacity_20: string;
  text: string;
  gray: string;
  gray2: string;
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
  transparent: 'transparent',
};
export const SCREEN_NAMES: ScreenName = {
  Main: 'Main',
  Home: 'HomeScreen',
  Login: 'LoginScreen',
  Onboarding: 'OnboardingScreen',
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
