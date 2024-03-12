import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button} from 'react-native';

const MyModalScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
        }}>
        This is a modal!
      </Text>
      <Button title="Dismiss" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default MyModalScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
