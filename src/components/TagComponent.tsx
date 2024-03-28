/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleProp, ViewStyle, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles';
import TextComponent from './TextComponent';
import {COLORS, FONT_FAMILY} from '../constants';

interface Props {
  onPress: () => void;
  label: string;
  icon?: ReactNode;
  textColor?: string;
  bgColor?: string;
  styles?: StyleProp<ViewStyle>;
}
const TagComponent = ({
  onPress,
  label,
  icon,
  textColor,
  bgColor,
  styles,
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        globalStyles.row,
        globalStyles.tag,
        {
          backgroundColor: bgColor ? bgColor : COLORS.white,
        },
        styles,
      ]}
      onPress={onPress}>
      {icon && icon}
      <TextComponent
        fontFamily={FONT_FAMILY.medium}
        text={label}
        color={textColor ? textColor : bgColor ? COLORS.white : COLORS.gray}
        styles={{marginLeft: icon ? 8 : 0}}
      />
    </TouchableOpacity>
  );
};

export default TagComponent;
