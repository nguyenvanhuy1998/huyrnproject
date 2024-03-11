import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const NotificationsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Notifications Screen</Text>
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
