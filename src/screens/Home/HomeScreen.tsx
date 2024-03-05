import React from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = ({route, navigation}) => {
  const {itemId} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Button
        title="Update param"
        onPress={() =>
          navigation.setParams({
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
    </View>
  );
};

export default HomeScreen;
