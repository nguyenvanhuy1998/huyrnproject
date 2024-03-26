/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';
import {COLORS} from '../constants';

interface Props {
  size?: number;
  children: ReactNode;
  backgroundColor?: string;
  onPress?: () => void;
  styles?: StyleProp<ViewStyle>;
}
const CircleComponent = ({
  size,
  children,
  backgroundColor,
  onPress,
  styles,
}: Props) => {
  const localStyle: any = {
    width: size ?? 40,
    height: size ?? 40,
    backgroundColor: backgroundColor ?? COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  };
  return onPress ? (
    <TouchableOpacity onPress={onPress} style={[localStyle, styles]}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={[localStyle, styles]}>{children}</View>
  );
};

export default CircleComponent;
