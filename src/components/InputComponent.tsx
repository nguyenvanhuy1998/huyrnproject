import React, {ReactNode, useState} from 'react';
import {
  KeyboardType,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../constants';
import {globalStyles} from '../styles';

interface Props {
  value: string;
  onChangeText: (value: string) => void;
  prefix?: ReactNode;
  suffix?: ReactNode;
  placeholder?: string;
  isPassword?: boolean;
  allowClear?: boolean;
  keyboardType?: KeyboardType;
}
const InputComponent = ({
  value,
  onChangeText,
  prefix,
  suffix,
  placeholder,
  isPassword,
  allowClear,
  keyboardType,
}: Props) => {
  const [isShowPassword, setIsShowPassword] = useState(isPassword ?? false);
  return (
    <View style={[styles.inputContainer]}>
      {prefix && prefix}
      <TextInput
        style={[styles.input, globalStyles.text]}
        value={value}
        placeholder={placeholder ?? ''}
        secureTextEntry={isShowPassword}
        onChangeText={val => onChangeText(val)}
        placeholderTextColor={'#747688'}
        keyboardType={keyboardType ?? 'default'}
        autoCapitalize="none"
      />
      {suffix && suffix}
      <TouchableOpacity
        onPress={() => {
          if (isPassword) {
            setIsShowPassword(!isShowPassword);
          } else {
            onChangeText('');
          }
        }}>
        {isPassword ? (
          <FontAwesome
            name={isShowPassword ? 'eye-slash' : 'eye'}
            size={22}
            color={COLORS.gray}
          />
        ) : (
          value.length > 0 &&
          allowClear && <AntDesign name="close" size={22} color={COLORS.text} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default InputComponent;
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.gray3,
    width: '100%',
    minHeight: 56,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
    marginBottom: 18,
  },
  input: {
    margin: 0,
    padding: 0,
    flex: 1,
    paddingHorizontal: 14,
  },
});
