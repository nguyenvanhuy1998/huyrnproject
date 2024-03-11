import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import {DrawerActions} from '@react-navigation/native';

const FeedScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>FeedScreen</Text>
      <Button
        title="Open drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <Button
        title="Toggle drawer"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
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
