import {View, Text, Button} from 'react-native';
import React from 'react';

const FeedScreen = ({navigation}) => {
  return (
    <View>
      <Text>FeedScreen</Text>
      <Button title="Go to Root" onPress={() => navigation.navigate('Root')} />
      <Button
        title="Go to Root, Profile"
        onPress={() => navigation.navigate('Root', {screen: 'Profile'})}
      />
    </View>
  );
};

export default FeedScreen;
