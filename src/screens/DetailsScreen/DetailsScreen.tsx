import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

const DetailsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>DetailsScreen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
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
