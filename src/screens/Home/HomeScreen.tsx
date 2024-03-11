import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
