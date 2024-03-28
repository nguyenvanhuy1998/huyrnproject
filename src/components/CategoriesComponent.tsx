/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ChefFork} from '../assets/svgs';
import {COLORS} from '../constants';
import TagComponent from './TagComponent';

interface Props {
  isFill?: boolean;
}
interface Category {
  key: string;
  label: string;
  icon: ReactNode;
  bgColor: string;
}
const CategoriesComponent = ({isFill}: Props) => {
  const categories: Category[] = [
    {
      key: 'sports',
      label: 'Sports',
      icon: (
        <FontAwesome5
          name="basketball-ball"
          color={isFill ? COLORS.white : COLORS.red}
        />
      ),
      bgColor: COLORS.red,
    },
    {
      key: 'music',
      label: 'Music',
      icon: (
        <FontAwesome5
          name="music"
          color={isFill ? COLORS.white : COLORS.orange}
        />
      ),
      bgColor: COLORS.orange,
    },
    {
      key: 'food',
      label: 'Food',
      icon: <ChefFork color={isFill ? COLORS.white : COLORS.green} />,
      bgColor: COLORS.green,
    },
    {
      key: 'art',
      label: 'Art',
      icon: (
        <Ionicons
          name="color-palette"
          color={isFill ? COLORS.white : COLORS.blue}
        />
      ),
      bgColor: COLORS.blue,
    },
  ];
  return (
    <FlatList
      contentContainerStyle={{
        paddingHorizontal: 12,
        columnGap: 12,
      }}
      showsHorizontalScrollIndicator={false}
      horizontal
      keyExtractor={item => item.key}
      data={categories}
      renderItem={({item}) => (
        <TagComponent
          styles={{
            minWidth: 82,
          }}
          label={item.label}
          icon={item.icon}
          onPress={() => {}}
          bgColor={isFill ? item.bgColor : COLORS.white}
        />
      )}
    />
  );
};

export default CategoriesComponent;

const styles = StyleSheet.create({});
