import React, {useContext} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../../../App';

const HomeScreen = ({navigation}) => {
  const {signOut} = React.useContext(AuthContext);

  return (
    <View>
      <Text>Signed in!</Text>
      <Button title="Sign out" onPress={signOut} />
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
