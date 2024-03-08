import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';

const MessagesScreen = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = navigation.getParent().addListener('tabPress', e => {
      // Do something
      alert('Tab pressed!');
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View>
      <Text>MessagesScreen</Text>
      <Button title="Go to Feed" onPress={() => navigation.navigate('Feed')} />
    </View>
  );
};

export default MessagesScreen;
