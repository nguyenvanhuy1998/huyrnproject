import React, {ReactNode} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import {globalStyles} from '../styles';

interface Props {
  children: ReactNode;
  styles?: StyleProp<ViewStyle>;
}
const SectionComponent = ({children, styles}: Props) => {
  return <View style={[globalStyles.section, styles]}>{children}</View>;
};

export default SectionComponent;
