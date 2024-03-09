import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';

const SettingsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>SettingsScreen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default SettingsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
