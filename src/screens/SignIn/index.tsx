import React, { useState, useContext } from 'react';
import { Image, KeyboardAvoidingView } from 'react-native';
import * as S from './SignIn.styles';
import { SignInput } from '../../components/SignInput/index';
import { useNavigation } from '@react-navigation/native';
import Api from '../../Api';
import { UserContext } from '../../contexts/UserContext';

export const SignIn = () => {

  const { dispatch: userDispatch } = useContext(UserContext)

  const navigation = useNavigation();

  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleSignIn = async () => {
    if (emailField !== '' && passwordField !== '') {
      let res = await Api.signIn(emailField, passwordField);

      if (res !== 'cliente não encontrado' && res !== {}) {
        userDispatch({
          type: 'setUser',
          user: res
        })
        navigation.reset({
          routes: [{ name: 'Home' }]
        });
      } else {
        navigation.navigate('SignIn')
      }
    } else {
      alert("Preencha todos os campos obrigatórios!")
    }
  }

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{
        name: 'SignUp'
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
        <S.RowBetween>
          {/* <S.Column>
            <S.Title>
              Cadastre-se
            </S.Title>
            <S.SubTitle>
              ou acesse sua conta
            </S.SubTitle>
          </S.Column> */}
          <Image
            source={require('../../assets/premmius-logo.jpeg')}
            style={{ width: 250, height: 100 }}
          />
        </S.RowBetween>

        <S.SubTitle style={{ marginTop: 20, marginBottom: 20, opacity: 0.8 }} >
          Acesse sua conta
        </S.SubTitle>
        <KeyboardAvoidingView>
          <S.InputArea>
            <SignInput
              label='E-mail'
              placeholder='exemplo@exemplo.com'
              value={emailField}
              onChange={t => setEmailField(t)} />
            <SignInput
              label='Senha'
              placeholder='digite sua senha'
              value={passwordField}
              onChange={t => setPasswordField(t)}
              password={true}
            />
            <S.SignMessageButton>
              <S.SignMessageButtonText>Esqueci minha senha</S.SignMessageButtonText>
              {/* <S.SignMessageButtonTextBold>Cadastre-se</S.SignMessageButtonTextBold> */}
            </S.SignMessageButton>
            <S.Column style={{
              width: '100%',
              alignItems: 'center'
            }}>
              <S.CustomButton style={{ marginTop: 20 }} onPress={handleSignIn} >
                <S.CustomButtonText>Entrar</S.CustomButtonText>
              </S.CustomButton>
              <S.SubTitle style={{ marginTop: 10, marginBottom: 10, opacity: 0.8 }} >
                ou
              </S.SubTitle>
              <S.CustomButton onPress={handleMessageButtonClick}>
                <S.CustomButtonText>Cadastre-se</S.CustomButtonText>
              </S.CustomButton>
            </S.Column>
          </S.InputArea>
        </KeyboardAvoidingView>
      </S.LoginContainer>
    </S.Container>
  )
};
