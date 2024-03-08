import {View, Text, Button} from 'react-native';
import React from 'react';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Edit Post"
        onPress={() => navigation.navigate('EditPost')}
      />
    </View>
  );
};

export default ProfileScreen;
