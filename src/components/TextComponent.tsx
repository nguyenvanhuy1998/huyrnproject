import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {globalStyles} from '../styles';
import {COLORS, FONT_FAMILY} from '../constants';

interface Props {
  text: string;
  color?: string;
  fontSize?: number;
  flex?: number;
  fontFamily?: string;
  styles?: StyleProp<TextStyle>;
  title?: boolean;
}
const TextComponent = ({
  text,
  color,
  fontSize,
  flex,
  fontFamily,
  styles,
  title,
}: Props) => {
  return (
    <Text
      style={[
        globalStyles.text,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          color,
          flex: flex ?? 0,
          fontSize: title ? 24 : fontSize,
          fontFamily: title ? FONT_FAMILY.bold : fontFamily,
        },
        styles,
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
