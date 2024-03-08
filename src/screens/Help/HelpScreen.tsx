import {View, Text, Button} from 'react-native';
import React from 'react';

const HelpScreen = ({navigation}) => {
  return (
    <View>
      <Text>HelpScreen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Invite" onPress={() => navigation.navigate('Invite')} />
    </View>
  );
};

export default HelpScreen;
