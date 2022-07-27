import React, { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform } from 'react-native';
import * as S from './SignUp.styles';
import { SignInput } from '../../components/SignInput/index';
import { useNavigation } from '@react-navigation/native';
import Api from '../../Api';
import { ScrollView } from 'react-native-gesture-handler';


export const SignUp = () => {

  const navigation = useNavigation();

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [emailConfirmationField, setEmailConfirmationField] = useState('');
  // const [phoneField, setPhoneField] = useState('');
  const [cpfField, setCpfField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleSignClick = async () => {
    if (nameField !== '' && emailField !== '') {
      let res = await Api.signUp(nameField, cpfField, emailField, passwordField);
      console.log('Resposta da req =>', res)
      if (res) {
        // alert('Ok')
        navigation.navigate('Home');
      } else {
        alert('Erro')
      }
    } else {
      alert('Preencha os campos obrigatórios.')
    }
  }

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{
        name: 'SignIn'
      }]
    });
  }

  return (
    <S.Container>
      {/* <S.Header>
        <Image
          source={require('../../assets/premmius-logo.jpeg')}
          style={{ width: 250, height: 100 }}
        />
      </S.Header> */}

      <S.LoginContainer>
        <S.RowBetween style={{ marginBottom: 20 }} >
          <S.Column style={{ maxWidth: '60%' }} >
            <S.Title>
              Preencha os campos abaixo para realizar seu cadastro
            </S.Title>
          </S.Column>
          {/* <Image
            source={require('../../assets/ilustra-1.jpg')}
            style={{ width: 150, height: 100 }}
          /> */}
        </S.RowBetween>
        <S.SignMessageButton onPress={handleMessageButtonClick} >
          <S.SignMessageButtonText>Já possui cadastro ?</S.SignMessageButtonText>
          <S.SignMessageButtonTextBold>Ir para login</S.SignMessageButtonTextBold>
        </S.SignMessageButton>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          enabled
          keyboardVerticalOffset={80}
        >
          <ScrollView>
            <S.InputArea>
              <SignInput
                label='Nome completo'
                placeholder='Digite seu nome'
                value={nameField}
                onChange={t => setNameField(t)}
              />

              <SignInput
                label='CPF'
                placeholder='123.456.789-10'
                value={cpfField}
                onChange={t => setCpfField(t)}
              />

              {/* <SignInput
                label='Data de nascimento'
                placeholder='123.456.789-10'
                value={cpfField}
                onChange={t => setCpfField(t)}
              /> */}

              {/* <SignInput
                label='Celular'
                placeholder='(11) 91234-5678'
                value={phoneField}
                onChange={t => setPhoneField(t)}
              /> */}

              <SignInput
                label='E-mail'
                placeholder='exemplo@exemplo.com'
                value={emailField}
                onChange={t => setEmailField(t)}
              />

              {/* <SignInput
                label='Confirme seu e-mail'
                placeholder='exemplo@exemplo.com'
                value={emailConfirmationField}
                onChange={t => setEmailConfirmationField(t)}
              /> */}

              <SignInput
                label='Senha'
                placeholder='digite sua senha'
                value={passwordField}
                onChange={t => setPasswordField(t)}
                password={true}
              />
              <S.Column style={{
                width: '100%',
                alignItems: 'center'
              }}>
                <S.CustomButton style={{ marginTop: 20 }} onPress={handleSignClick} >
                  <S.CustomButtonText>Cadastrar</S.CustomButtonText>
                </S.CustomButton>
              </S.Column>
            </S.InputArea>
          </ScrollView>
        </KeyboardAvoidingView>
      </S.LoginContainer>
    </S.Container>
  )
};
