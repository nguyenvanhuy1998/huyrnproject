import React from 'react';
import {Button, Text, View} from 'react-native';
import {commonStyles} from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const handleLogout = async () => {
    await AsyncStorage.clear();
  };
  return (
    <View style={commonStyles.containerCenter}>
      <Text>Home Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
