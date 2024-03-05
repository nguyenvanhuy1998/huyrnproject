import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = ({route, navigation}) => {
  useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Text
        style={{
          margin: 10,
        }}>
        Post: {route.params?.post}
      </Text>
    </View>
  );
};

export default HomeScreen;
