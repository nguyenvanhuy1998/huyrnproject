import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => {
          navigation.navigate('Profile', {name: 'Custom profile header'});
        }}
      />
    </View>
  );
};

export default HomeScreen;
