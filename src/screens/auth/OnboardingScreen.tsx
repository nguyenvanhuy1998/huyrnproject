import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {COLORS, SCREEN_NAMES, SPACING, images} from '../../constants';
import {globalStyles} from '../../styles';

const OnboardingScreen = ({navigation}: any) => {
  const [index, setIndex] = useState(0);
  const handleSkip = () => {
    navigation.navigate(SCREEN_NAMES.Login);
  };
  const handleNext = () => {
    if (index < 2) {
      setIndex(index + 1);
    } else {
      navigation.navigate(SCREEN_NAMES.Login);
    }
  };
  const handleIndexChanged = (num: number) => {
    setIndex(num);
  };
  return (
    <View style={[globalStyles.container]}>
      <Swiper
        loop={false}
        index={index}
        onIndexChanged={num => handleIndexChanged(num)}
        activeDotColor={COLORS.white}
        dotColor={COLORS.white_opacity_20}>
        <Image
          source={images.onboarding1}
          resizeMode="cover"
          style={styles.img}
        />
        <Image
          source={images.onboarding2}
          resizeMode="cover"
          style={styles.img}
        />
        <Image
          source={images.onboarding3}
          resizeMode="cover"
          style={styles.img}
        />
      </Swiper>
      <View style={styles.btnBottomContainer}>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={[styles.text, {color: COLORS.gray2}]}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext}>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;
const styles = StyleSheet.create({
  img: {
    flex: 1,
    width: SPACING.width,
    height: SPACING.height,
  },
  btnBottomContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  text: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '500',
  },
});
