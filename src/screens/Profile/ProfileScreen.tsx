import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';

const ProfileScreen = ({navigation}) => {
  useFocusEffect(
    useCallback(() => {
      alert('Screen was focused');
      // Do something when the screen is focused
      return () => {
        alert('Screen was unfocused');
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, []),
  );
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
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
