import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

const DetailsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Details!</Text>
    </View>
  );
};

export default DetailsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
