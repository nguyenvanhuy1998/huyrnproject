/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ButtonComponent from './ButtonComponent';
import {COLORS, SCREEN_NAMES} from '../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {authSelector, removeAuth} from '../redux/reducers/authReducer';
import TextComponent from './TextComponent';
import {
  Bookmark2,
  Calendar,
  Logout,
  Message2,
  MessageQuestion,
  Setting2,
  Sms,
  User,
} from 'iconsax-react-native';
import RowComponent from './RowComponent';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginManager} from 'react-native-fbsdk-next';

const size = 20;
const color = COLORS.gray;
const profileMenu = [
  {
    key: 'MyProfile',
    title: 'My Profile',
    icon: <User size={size} color={color} />,
  },
  {
    key: 'Message',
    title: 'Message',
    icon: <Message2 size={size} color={color} />,
  },
  {
    key: 'Calendar',
    title: 'Calendar',
    icon: <Calendar size={size} color={color} />,
  },
  {
    key: 'Bookmark',
    title: 'Bookmark',
    icon: <Bookmark2 size={size} color={color} />,
  },
  {
    key: 'ContactUs',
    title: 'Contact Us',
    icon: <Sms size={size} color={color} />,
  },
  {
    key: 'Settings',
    title: 'Settings',
    icon: <Setting2 size={size} color={color} />,
  },
  {
    key: 'HelpAndFAQs',
    title: 'Help & FAQs',
    icon: <MessageQuestion size={size} color={color} />,
  },
  {
    key: 'SignOut',
    title: 'Sing Out',
    icon: <Logout size={size} color={color} />,
  },
];
const DrawerCustom = ({navigation}: any) => {
  const user = useSelector(authSelector);
  const dispatch = useDispatch();
  const handleSignOut = async () => {
    await GoogleSignin.signOut();
    await AsyncStorage.clear();
    LoginManager.logOut();
    dispatch(removeAuth());
  };
  const handleMyProfile = () => {
    navigation.toggleDrawer();
    navigation.navigate(SCREEN_NAMES.ProfileTab, {
      screen: SCREEN_NAMES.Profile,
    });
  };
  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={handleMyProfile}>
        {user.photo ? (
          <Image source={{uri: user.photo}} style={[styles.avatar]} />
        ) : (
          <View style={[styles.avatar, {backgroundColor: COLORS.gray2}]}>
            <TextComponent
              title
              fontSize={22}
              color={COLORS.white}
              text={
                user.name
                  ? user.name
                      .split(' ')
                      [user.name.split(' ').length - 1].substring(0, 1)
                  : ''
              }
            />
          </View>
        )}
        <TextComponent text={user.name} title />
      </TouchableOpacity>
      <FlatList
        style={{
          flex: 1,
          marginVertical: 20,
        }}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        keyExtractor={item => item.key}
        data={profileMenu}
        renderItem={({item}) => (
          <RowComponent
            styles={[styles.listItem]}
            onPress={() => {
              if (item.key === 'SignOut') {
                handleSignOut();
              } else if (item.key === 'MyProfile') {
                handleMyProfile();
              } else {
                console.log(item.key);
                navigation.toggleDrawer();
              }
            }}>
            {item.icon}
            <TextComponent text={item.title} />
          </RowComponent>
        )}
      />
      <ButtonComponent
        onPress={() => {}}
        icon={
          <MaterialCommunityIcons name="crown" size={22} color={COLORS.sun2} />
        }
        iconFlex="left"
        styles={{
          alignSelf: 'flex-start',
          minHeight: 48,
          width: '80%',
        }}
        isShadow={false}
        text="Upgrade Pro"
        type="primary"
        backgroundColor={COLORS.sun2_opacity_20}
        color={COLORS.sun2}
      />
    </View>
  );
};

export default DrawerCustom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'android' ? StatusBar.currentHeight : 48,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 100,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    paddingVertical: 12,
    justifyContent: 'flex-start',
    gap: 12,
  },
});
