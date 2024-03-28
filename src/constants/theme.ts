import {Dimensions} from 'react-native';

interface Color {
  primary: string;
  primary2: string;
  primary3: string;
  violet: string;
  white: string;
  secondary: string;
  white_opacity_20: string;
  text: string;
  gray: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  transparent: 'transparent';
  dangerous: string;
  sun: string;
  sun2: string;
  sun2_opacity_20: string;
}
interface Spacing {
  width: number;
  height: number;
}

interface FontFamily {
  regular: string;
  medium: string;
  semiBold: string;
  bold: string;
}

export const COLORS: Color = {
  primary: '#5669FF',
  primary2: '#524ce0',
  primary3: '#5d56f3',
  secondary: '#3056f0',
  violet: '#B1AEFA',

  white: '#fff',
  white_opacity_20: 'rgba(255, 255, 255, 0.2)',
  text: '#120D26',
  gray: '#807A7A',
  gray2: '#DADADA',
  gray3: '#E4DFDF',
  gray4: '#9d9898',
  gray5: '#D9D9D9',
  transparent: 'transparent',
  dangerous: '#d91e18',
  sun: '#02E9FE',
  sun2: '#00F8FF',
  sun2_opacity_20: '#00F8FF33',
};
export const SCREEN_NAMES = {
  // Tab
  ExploreTab: 'ExploreTab',
  EventsTab: 'EventsTab',
  MapTab: 'MapTab',
  ProfileTab: 'ProfileTab',
  Main: 'Main',
  Home: 'HomeScreen',
  Login: 'LoginScreen',
  Onboarding: 'OnboardingScreen',
  SignUp: 'SignUpScreen',
  ForgotPassword: 'ForgotPasswordScreen',
  Verification: 'VerificationScreen',
  AddNew: 'AddNewScreen',
  Events: 'EventsScreen',
  Profile: 'ProfileScreen',
  Map: 'MapScreen',
  SearchEvents: 'SearchEventsScreen',
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
export const BASE_URL = 'http://localhost:3001';
export const BASE_URL_ANDROID = 'http://10.0.2.2:3001';
