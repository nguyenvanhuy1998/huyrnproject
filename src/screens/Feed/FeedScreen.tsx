import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';

const FeedScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>FeedScreen</Text>
    </View>
  );
};

export default FeedScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
