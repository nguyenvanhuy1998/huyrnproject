import React, {useContext} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {RightDrawerContext} from '../../../App';

const HomeScreen = ({navigation}) => {
  const {openRightDrawer} = useContext(RightDrawerContext);
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.openDrawer()}
        title="Open left drawer"
      />
      <Button title="Open right drawer" onPress={() => openRightDrawer()} />
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
