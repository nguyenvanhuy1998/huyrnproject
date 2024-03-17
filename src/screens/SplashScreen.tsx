import React from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {COLORS, SPACING, commonStyles, images} from '../constants';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={images.splashImg}
      imageStyle={commonStyles.flex}
      style={commonStyles.containerCenter}>
      <Image source={images.logo} style={styles.img} resizeMode="contain" />
      <ActivityIndicator color={COLORS.gray} size={22} />
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  img: {
    width: SPACING.width * 0.7,
  },
});
