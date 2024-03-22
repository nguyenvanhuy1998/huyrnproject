/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  ButtonComponent,
  ContainerComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {COLORS, FONT_FAMILY} from '../../constants';
import {ArrowRight} from 'iconsax-react-native';
import {globalStyles} from '../../styles';
import authApi from '../../api/authApi';
import {LoadingModal} from '../../modals';
import {useDispatch} from 'react-redux';
import {addAuth} from '../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const VerificationScreen = ({navigation, route}: any) => {
  const {code, email, password, fullName} = route.params;

  const [codeValues, setCodeValues] = useState<string[]>([]);
  const [newCode, setNewCode] = useState('');
  const [limit, setLimit] = useState(120);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCode, setCurrentCode] = useState<string>(code);
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  const ref1 = useRef<any>();
  const ref2 = useRef<any>();
  const ref3 = useRef<any>();
  const ref4 = useRef<any>();

  useEffect(() => {
    ref1.current.focus();
  }, []);
  useEffect(() => {
    let item = '';
    codeValues.forEach(value => (item += value));
    setNewCode(item);
  }, [codeValues]);
  useEffect(() => {
    if (limit > 0) {
      const interval = setInterval(() => {
        setLimit(prev => prev - 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [limit]);

  const handleChangeCode = (value: string, index: number) => {
    const data = [...codeValues];
    data[index] = value;
    setCodeValues(data);
  };
  const handleResendVerification = async () => {
    setIsLoading(true);
    try {
      const res = await authApi.HandleAuthentication(
        '/verifyOtp',
        {
          email,
        },
        'post',
      );
      console.log(res);
      setIsLoading(false);
      setLimit(120);
      setCurrentCode(res.data.code);
      setCodeValues([]);
      setNewCode('');
      setErrorMessage('');
    } catch (error) {
      setIsLoading(false);
      console.log('Cannot send verification code', error);
    }
  };
  const handleVerification = async () => {
    if (limit > 0) {
      if (newCode != currentCode) {
        setErrorMessage('Invalid verification code');
      } else {
        setErrorMessage('');
        callApiRegister();
      }
    } else {
      setErrorMessage(
        'Timeout verification code, please resend new verification code',
      );
    }
  };
  const callApiRegister = async () => {
    setIsLoading(true);
    try {
      const res = await authApi.HandleAuthentication(
        '/register',
        {
          fullName,
          email,
          password,
        },
        'post',
      );
      setIsLoading(false);
      console.log(res);
      dispatch(addAuth(res.data));
      await AsyncStorage.setItem('auth', JSON.stringify(res.data));
    } catch (error) {
      setIsLoading(false);
      setErrorMessage('User has already exist!!!');
      console.log('Cannot create new user', error);
    }
  };
  return (
    <ContainerComponent back isImageBackground isScroll>
      <SectionComponent>
        <TextComponent text="Verification" title />
        <SpaceComponent height={12} />
        <TextComponent
          text={`We've send you the verification code on ${email.replace(
            /.{1,5}/,
            (m: any) => '*'.repeat(m.length),
          )}`}
        />
        <SpaceComponent height={26} />
        <RowComponent justify="space-around">
          <TextInput
            ref={ref1}
            maxLength={1}
            style={[styles.input]}
            placeholder="-"
            keyboardType="number-pad"
            value={codeValues[0]}
            onChangeText={val => {
              handleChangeCode(val, 0);
              val.length > 0 && ref2.current.focus();
            }}
          />
          <TextInput
            ref={ref2}
            maxLength={1}
            style={[styles.input]}
            placeholder="-"
            keyboardType="number-pad"
            value={codeValues[1]}
            onChangeText={val => {
              handleChangeCode(val, 1);
              val.length > 0 && ref3.current.focus();
            }}
          />
          <TextInput
            ref={ref3}
            maxLength={1}
            style={[styles.input]}
            placeholder="-"
            keyboardType="number-pad"
            value={codeValues[2]}
            onChangeText={val => {
              handleChangeCode(val, 2);
              val.length > 0 && ref4.current.focus();
            }}
          />
          <TextInput
            ref={ref4}
            maxLength={1}
            style={[styles.input]}
            placeholder="-"
            keyboardType="number-pad"
            value={codeValues[3]}
            onChangeText={val => {
              handleChangeCode(val, 3);
            }}
          />
        </RowComponent>
      </SectionComponent>
      <SectionComponent
        // eslint-disable-next-line react-native/no-inline-styles
        styles={{
          marginTop: 40,
        }}>
        <ButtonComponent
          disabled={newCode.length !== 4}
          onPress={handleVerification}
          text="Continue"
          type="primary"
          icon={
            <View
              style={[
                globalStyles.iconContainer,
                {
                  backgroundColor:
                    newCode.length !== 4 ? COLORS.gray : COLORS.secondary,
                },
              ]}>
              <ArrowRight size={18} color={COLORS.white} />
            </View>
          }
          iconFlex="right"
        />
      </SectionComponent>
      {errorMessage && (
        <SectionComponent>
          <TextComponent
            text={errorMessage}
            color={COLORS.dangerous}
            styles={{
              textAlign: 'center',
            }}
          />
        </SectionComponent>
      )}
      <SectionComponent>
        {limit > 0 ? (
          <RowComponent justify="center">
            <TextComponent text="Re-send code in " />
            <TextComponent
              text={`${(limit - (limit % 60)) / 60}:${
                limit - (limit - (limit % 60))
              }`}
              color={COLORS.primary}
            />
          </RowComponent>
        ) : (
          <RowComponent>
            <ButtonComponent
              text="Resend email verification"
              type="link"
              onPress={handleResendVerification}
            />
          </RowComponent>
        )}
      </SectionComponent>
      <LoadingModal visible={isLoading} />
    </ContainerComponent>
  );
};

export default VerificationScreen;
const styles = StyleSheet.create({
  input: {
    height: 55,
    width: 55,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    fontFamily: FONT_FAMILY.bold,
    textAlign: 'center',
  },
});
