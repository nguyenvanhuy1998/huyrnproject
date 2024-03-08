import React from 'react';
import {Button, Text, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() =>
          navigation.navigate('Root', {
            screen: 'Settings',
            params: {
              user: 'jane',
            },
          })
        }
      />
    </View>
  );
};

export default HomeScreen;
