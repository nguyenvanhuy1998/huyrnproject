import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../../styles';
import {ButtonComponent} from '../../components';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager} from 'react-native-fbsdk-next';
import {useDispatch} from 'react-redux';
import {removeAuth} from '../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={[globalStyles.containerCenter]}>
      <ButtonComponent
        text="Log out"
        type="primary"
        onPress={async () => {
          await GoogleSignin.signOut();
          await AsyncStorage.clear();
          LoginManager.logOut();
          dispatch(removeAuth());
        }}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
