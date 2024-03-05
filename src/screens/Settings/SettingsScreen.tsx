import {View, Text, Button} from 'react-native';
import React from 'react';

const SettingsScreen = ({route, navigation}) => {
  const {user} = route.params;
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>SettingsScreen</Text>
      <Text>userParam:{JSON.stringify(user)}</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default SettingsScreen;
