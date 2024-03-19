import React, {ReactNode} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {globalStyles} from '../styles';
import {TouchableOpacity} from 'react-native';

interface Props {
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  styles?: StyleProp<ViewStyle>;
  children: ReactNode;
  onPress?: () => void;
}
const RowComponent = ({justify, styles, children, onPress}: Props) => {
  const localStyles = [
    globalStyles.row,
    {
      justifyContent: justify,
    },
    styles,
  ];
  return onPress ? (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={localStyles}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={localStyles}>{children}</View>
  );
};

export default RowComponent;
