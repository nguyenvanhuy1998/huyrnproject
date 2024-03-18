import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React, {ReactNode} from 'react';
import {ImageBackground} from 'react-native';
import {globalStyles} from '../styles';
import {images} from '../constants';

interface Props {
  isImageBackground?: boolean;
  isScroll?: boolean;
  title?: string;
  children: ReactNode;
}
const ContainerComponent = ({
  isImageBackground,
  isScroll,
  title,
  children,
}: Props) => {
  const returnContainer = isScroll ? (
    <ScrollView style={globalStyles.flex}>{children}</ScrollView>
  ) : (
    <View style={globalStyles.flex}>{children}</View>
  );
  return isImageBackground ? (
    <ImageBackground
      source={images.splashImg}
      style={globalStyles.flex}
      imageStyle={globalStyles.flex}>
      <SafeAreaView style={globalStyles.flex}>{returnContainer}</SafeAreaView>
    </ImageBackground>
  ) : (
    <SafeAreaView style={[globalStyles.container]}>
      <View>{returnContainer}</View>
    </SafeAreaView>
  );
};

export default ContainerComponent;
