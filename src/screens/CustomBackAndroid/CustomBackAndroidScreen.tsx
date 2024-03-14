import {BackHandler, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Button} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
const listData = [
  {
    key: 'Apple',
  },
  {
    key: 'Orange',
  },
  {
    key: 'Carrot',
  },
];
const CustomBackAndroidScreen = () => {
  const [selected, setSelected] = useState(listData[0].key);
  const [isSelectionModEnabled, setIsSelectionModEnabled] = useState(false);
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (isSelectionModEnabled) {
          setIsSelectionModEnabled(false);
          return true;
        } else {
          return false;
        }
      };
      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );
      return () => subscription.remove();
    }, [isSelectionModEnabled]),
  );
  return (
    <View style={styles.container}>
      {listData.map(item => {
        return (
          <View key={item.key}>
            {isSelectionModEnabled ? (
              <Pressable
                onPress={() => {
                  setSelected(item.key);
                }}>
                <Text
                  style={{
                    ...styles.text,
                    textDecorationLine:
                      item.key === selected ? 'underline' : '',
                  }}>
                  {item.key}
                </Text>
              </Pressable>
            ) : (
              <Text style={styles.text}>
                {item.key === selected ? 'Selected ' : ''}
                {item.key}
              </Text>
            )}
          </View>
        );
      })}
      <Button
        title="Toggle selection mode"
        onPress={() => setIsSelectionModEnabled(!isSelectionModEnabled)}
      />
      <Text>Selection mode: {isSelectionModEnabled ? 'ON' : 'OFF'}</Text>
    </View>
  );
};

export default CustomBackAndroidScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});
