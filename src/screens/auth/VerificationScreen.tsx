import {View, Text} from 'react-native';
import React from 'react';

const VerificationScreen = ({navigation, route}: any) => {
  const {code, email, password} = route.params;
  return (
    <View>
      <Text>{`${code} ${email} ${password}`}</Text>
    </View>
  );
};

export default VerificationScreen;
