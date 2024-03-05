import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

const CreatePostScreen = ({navigation}) => {
  const [postText, setPostText] = useState('');
  return (
    <>
      <TextInput
        value={postText}
        onChangeText={setPostText}
        placeholder="What's  on your mind?"
        multiline
        style={{
          height: 200,
          padding: 10,
          backgroundColor: 'white',
        }}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merg params back to home screen
          navigation.navigate({
            name: 'Home',
            params: {
              post: postText,
            },
            merge: true,
          });
        }}
      />
    </>
  );
};

export default CreatePostScreen;
