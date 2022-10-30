import React from 'react';
import { Button } from '../../components/Button/index';
import * as S from './RegistrationChoice.styles';
import { useNavigation } from '@react-navigation/native';

export const RegistrationChoice = () => {
  const navigation = useNavigation();

  const handleRegistrationChoice = (typeRegistration: string) => {
    navigation.navigate('SignUp', {
      typeRegistration: typeRegistration
    })
  }

  return (
    <S.Container>
      <S.InfoTitle>Você é:</S.InfoTitle>
      {/* <S.ModalContainer> */}
      <Button
        onPress={() => handleRegistrationChoice('privateIndividual')}
        text='PessoaFísica'
      />
      <S.SmallTitle>
        ou
      </S.SmallTitle>
      <Button
        onPress={() => handleRegistrationChoice('shopkeeper')}
        text='Lojista'
      />
      {/* </S.ModalContainer> */}
    </S.Container>
  )
}