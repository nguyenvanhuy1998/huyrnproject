import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Update the title"
        onPress={() => {
          navigation.setOptions({
            title: 'Updated!',
          });
        }}
      />
    </View>
  );
};

export default HomeScreen;
