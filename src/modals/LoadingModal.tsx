/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';
import {TextComponent} from '../components';
import {globalStyles} from '../styles';
import {COLORS} from '../constants';

interface Props {
  visible: boolean;
  message?: string;
}
const LoadingModal = ({visible, message}: Props) => {
  return (
    <Modal
      visible={visible}
      style={[globalStyles.flex]}
      transparent
      statusBarTranslucent>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator color={COLORS.white} size={32} />
        <TextComponent
          text={message ?? 'Loading'}
          flex={0}
          color={COLORS.white}
        />
      </View>
    </Modal>
  );
};

export default LoadingModal;
