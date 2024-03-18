/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {StyleProp, ViewStyle, TextStyle, TouchableOpacity} from 'react-native';
import TextComponent from './TextComponent';
import {globalStyles} from '../styles';
import {COLORS, FONT_FAMILY} from '../constants';

interface Props {
  icon?: ReactNode;
  text: string;
  type?: 'primary' | 'text' | 'link';
  backgroundColor?: string;
  styles?: StyleProp<ViewStyle>;
  color?: string;
  textStyles?: StyleProp<TextStyle>;
  onPress?: () => void;
  iconFlex?: 'right' | 'left';
}
const ButtonComponent = ({
  icon,
  text,
  type,
  backgroundColor,
  styles,
  color,
  textStyles,
  onPress,
  iconFlex,
}: Props) => {
  return type === 'primary' ? (
    <TouchableOpacity
      style={[
        globalStyles.button,
        {
          backgroundColor: backgroundColor ?? COLORS.primary,
        },
        styles,
      ]}
      onPress={onPress}>
      {icon && icon}
      <TextComponent
        text={text}
        color={color ?? COLORS.white}
        styles={[
          textStyles,
          {
            marginLeft: icon ? 12 : 0,
          },
        ]}
        fontFamily={FONT_FAMILY.medium}
        flex={icon && iconFlex === 'right' ? 1 : 0}
      />
      {icon && iconFlex === 'right' && icon}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity>
      <TextComponent
        text={text}
        color={type === 'link' ? COLORS.primary : COLORS.text}
      />
    </TouchableOpacity>
  );
};

export default ButtonComponent;
