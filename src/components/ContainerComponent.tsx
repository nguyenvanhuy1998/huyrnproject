/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {ReactNode} from 'react';
import {ImageBackground} from 'react-native';
import {globalStyles} from '../styles';
import {COLORS, FONT_FAMILY, images} from '../constants';
import {useNavigation} from '@react-navigation/native';
import RowComponent from './RowComponent';
import {ArrowLeft} from 'iconsax-react-native';
import TextComponent from './TextComponent';

interface Props {
  isImageBackground?: boolean;
  isScroll?: boolean;
  title?: string;
  children: ReactNode;
  back?: boolean;
}
const ContainerComponent = ({
  isImageBackground,
  isScroll,
  title,
  children,
  back,
}: Props) => {
  const navigation: any = useNavigation();
  const headerComponent = () => {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 30,
        }}>
        {(title || back) && (
          <RowComponent
            styles={{
              paddingHorizontal: 16,
              paddingVertical: 10,
              minWidth: 48,
              minHeight: 48,
            }}>
            {back && (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  marginRight: 12,
                }}>
                <ArrowLeft size={24} color={COLORS.text} />
              </TouchableOpacity>
            )}
            {title && (
              <TextComponent
                fontSize={16}
                text={title}
                fontFamily={FONT_FAMILY.medium}
              />
            )}
          </RowComponent>
        )}
        {returnContainer}
      </View>
    );
  };
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
      <SafeAreaView style={globalStyles.flex}>{headerComponent()}</SafeAreaView>
    </ImageBackground>
  ) : (
    <SafeAreaView style={[globalStyles.container]}>
      <View>{headerComponent()}</View>
    </SafeAreaView>
  );
};

export default ContainerComponent;
