import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Update count" onPress={() => setCount(c => c + 1)} />
      ),
    });
  }, [navigation, setCount]);

  return <Text>Count: {count}</Text>;
};

export default HomeScreen;
