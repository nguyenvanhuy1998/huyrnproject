/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
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
  textFont?: string;
  disabled?: boolean;
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
  textFont,
  disabled,
}: Props) => {
  return type === 'primary' ? (
    <View
      style={{
        alignItems: 'center',
      }}>
      <TouchableOpacity
        disabled={disabled}
        style={[
          globalStyles.button,
          globalStyles.shadow,
          {
            backgroundColor: backgroundColor
              ? backgroundColor
              : disabled
              ? COLORS.gray4
              : COLORS.primary,
            marginBottom: 17,
            width: '90%',
          },
          styles,
        ]}
        onPress={onPress}>
        {icon && iconFlex === 'left' && icon}
        <TextComponent
          text={text}
          color={color ?? COLORS.white}
          styles={[
            textStyles,
            {
              marginLeft: icon ? 12 : 0,
              textAlign: 'center',
            },
          ]}
          fontFamily={textFont ?? FONT_FAMILY.medium}
          flex={icon && iconFlex === 'right' ? 1 : 0}
          fontSize={16}
        />
        {icon && iconFlex === 'right' && icon}
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <TextComponent
        text={text}
        color={type === 'link' ? COLORS.primary : COLORS.text}
      />
    </TouchableOpacity>
  );
};

export default ButtonComponent;
