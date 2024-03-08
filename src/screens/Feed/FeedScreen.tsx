import {View, Text, Button} from 'react-native';
import React from 'react';

const FeedScreen = ({navigation}) => {
  return (
    <View>
      <Text>FeedScreen</Text>
      <Button
        title="Go to Messages"
        onPress={() => navigation.navigate('Messages')}
      />
    </View>
  );
};

export default FeedScreen;
