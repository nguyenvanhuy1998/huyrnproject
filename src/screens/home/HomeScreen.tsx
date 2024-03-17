import React from 'react';
import {Button, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {globalStyles} from '../../styles';

const HomeScreen = () => {
  const handleLogout = async () => {
    await AsyncStorage.clear();
  };
  return (
    <View style={globalStyles.containerCenter}>
      <Text>Home Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
