import {Dimensions} from 'react-native';

interface Color {
  primary: string;
  white: string;
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
}

export const COLORS: Color = {
  primary: '#5669FF',
  white: '#fff',
  text: '#120D26',
  gray: '#3807A7A',
  gray2: '#DADADA',
  transparent: 'transparent',
};
export const SCREEN_NAMES: ScreenName = {
  Main: 'Main',
  Home: 'HomeScreen',
  Login: 'LoginScreen',
};
export const SPACING: Spacing = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
