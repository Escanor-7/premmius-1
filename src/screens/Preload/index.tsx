import React, { useEffect } from 'react';
import { Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import * as S from './Preload.styles';

export const Preload = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        // validar token

      } else {
        navigation.navigate('SignIn');
      }
    }
    checkToken();
  }, [])

  return <S.Container>
    <Image
      source={require('../../assets/premmius-logo.jpeg')}
      style={{ width: 300, height: 100 }}
    />
    <S.LoadingIcon size={40} color='#614B9D' />
  </S.Container>;
};
