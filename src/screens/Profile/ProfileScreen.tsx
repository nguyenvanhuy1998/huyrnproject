import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

const ProfileScreen = ({navigation}) => {
  useEffect(() => {
    return navigation.addListener('focus', () => alert('Screen was focused'));
  }, []);
  useEffect(() => {
    return navigation.addListener('blur', () => alert('Screen was unfocused'));
  }, []);

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
