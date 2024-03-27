/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {ArrowDown2, HambergerMenu, Notification} from 'iconsax-react-native';
import React from 'react';
import {Platform, StatusBar, TouchableOpacity, View} from 'react-native';
import {CircleComponent, RowComponent, TextComponent} from '../../components';
import {COLORS, FONT_FAMILY} from '../../constants';
import {globalStyles} from '../../styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={[globalStyles.container]}>
      <StatusBar barStyle={'light-content'} />
      <View
        style={{
          height: 179,
          backgroundColor: COLORS.primary,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 42,
          paddingHorizontal: 16,
        }}>
        <RowComponent>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <HambergerMenu size={24} color={COLORS.white} />
          </TouchableOpacity>
          <View style={[globalStyles.flex, {alignItems: 'center'}]}>
            <RowComponent>
              <TextComponent
                text="Current Location"
                color={COLORS.white}
                fontSize={12}
              />
              <MaterialIcons
                name="arrow-drop-down"
                size={18}
                color={COLORS.white}
              />
            </RowComponent>
            <TextComponent
              text="New York, USA"
              color={COLORS.white}
              fontFamily={FONT_FAMILY.medium}
              fontSize={13}
            />
          </View>
          <CircleComponent backgroundColor={COLORS.primary2} size={36}>
            <View>
              <Notification size={18} color={COLORS.white} />
              <View
                style={{
                  backgroundColor: COLORS.sun,
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  borderWidth: 2,
                  borderColor: COLORS.primary2,
                  position: 'absolute',
                  top: -2,
                  right: -2,
                }}
              />
            </View>
          </CircleComponent>
        </RowComponent>
      </View>
      <View style={[globalStyles.flex]}></View>
    </View>
  );
};

export default HomeScreen;
