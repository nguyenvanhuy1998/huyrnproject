import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
