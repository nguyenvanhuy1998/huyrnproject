import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {globalStyles} from '../styles';

interface Props {
  text: string;
  color?: string;
  fontSize?: number;
  flex?: number;
  fontFamily?: string;
  styles?: StyleProp<TextStyle>;
}
const TextComponent = ({
  text,
  color,
  fontSize,
  flex = 0,
  fontFamily,
  styles,
}: Props) => {
  return (
    <Text
      style={[
        globalStyles.text,
        {
          color,
          flex,
          fontSize,
          fontFamily,
        },
        styles,
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
