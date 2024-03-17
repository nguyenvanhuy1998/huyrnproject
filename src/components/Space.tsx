import React from 'react';
import {View} from 'react-native';
interface Props {
  width?: number;
  height?: number;
}
const Space = ({width, height}: Props) => {
  return (
    <View
      style={{
        width,
        height,
      }}
    />
  );
};

export default Space;
