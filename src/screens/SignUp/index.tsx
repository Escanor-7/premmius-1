import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Alert, Image, KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import * as S from './SignUp.styles';
import { SignInput } from '../../components/SignInput/index';
import { useNavigation } from '@react-navigation/native';
import Api from '../../Api';
import { ScrollView } from 'react-native-gesture-handler';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export const SignUp = ({ route }: any) => {
  const { dispatch: userDispatch } = useContext(UserContext)
  const navigation = useNavigation();
  const { typeRegistration } = route.params;
  console.log('Registro', typeRegistration)

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [emailConfirmationField, setEmailConfirmationField] = useState('');
  // const [phoneField, setPhoneField] = useState('');
  const [cpfField, setCpfField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [cnpjField, setCnpjField] = useState('');
  const [foundationDate, setFoundationDate] = useState('');

  const handleSignClick = async () => {
    if (nameField !== '' && emailField !== '') {
      let res = await Api.signUp(nameField, cpfField, emailField, passwordField);
      console.log('Resposta da req =>', res);

      if (res !== 'Cliente não encontrado' && res !== {}) {
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
      alert("Preencha todos os campos obrigatórios!");
    }
  }

  const handleSignClickShopkeeper = async () => {
    // company_name, cnpj, cpf, foundation_date, email, password
    if (nameField !== '' && emailField !== '') {
      let res = await Api.signUpShopkeeper(companyName, cnpjField, cpfField, foundationDate, emailField, passwordField);
      console.log('Resposta da req =>', res);

      if (res !== 'Cliente não encontrado' && res !== {}) {
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
      alert("Preencha todos os campos obrigatórios!");
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
      <S.Header>
        <Image
          source={require('../../assets/premmius-logo.jpg')}
          style={{ width: 250, height: 100 }}
        />
      </S.Header>

      <S.LoginContainer>
        <S.RowBetween style={{ marginBottom: 20 }} >
          <S.Column style={{ maxWidth: '70%', marginBottom: 20 }} >
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
                placeholderColor='#e8e2e221'
              />

              <SignInput
                label='CPF'
                placeholder='123.456.789-10'
                value={cpfField}
                onChange={t => setCpfField(t)}
                placeholderColor='#e8e2e221'
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
                placeholderColor='#e8e2e221'
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
                placeholderColor='#e8e2e221'
              />

              {typeRegistration === 'shopkeeper' ? (
                <>
                  <S.SubTitle>Dados do estabelecimento</S.SubTitle>
                  <SignInput
                    label='Nome'
                    placeholder='nome do estabelecimento'
                    value={companyName}
                    onChange={t => setCompanyName(t)}
                    placeholderColor='#e8e2e221'
                  />
                  <SignInput
                    label='CNPJ'
                    placeholder='CNPJ do estabelecimento'
                    value={cnpjField}
                    onChange={t => setCnpjField(t)}
                    placeholderColor='#e8e2e221'
                  />

                  <SignInput
                    label='Data da fundação'
                    placeholder='Ex:. 16/04/2022'
                    value={foundationDate}
                    onChange={t => setFoundationDate(t)}
                    placeholderColor='#e8e2e221'
                  />

                  <SignInput
                    label='Endereço do estabelecimento'
                    placeholder='ex.: Rua Duque de Caxias 34'
                    // value={passwordField}
                    // onChange={t => setPasswordField(t)}
                    placeholderColor='#e8e2e221'
                  />

                  <S.CheckBoxContainer>
                    <BouncyCheckbox
                      size={20}
                      fillColor="#F58634"
                      onPress={(isChecked: boolean) => { }}
                    />
                    <S.CheckBoxLabel>Aceito receber comunicações da Premmius por WhatsApp.</S.CheckBoxLabel>
                  </S.CheckBoxContainer>
                  <S.CheckBoxContainer>
                    <BouncyCheckbox
                      size={20}
                      fillColor="#F58634"
                      // unfillColor="#FFFFFF"
                      onPress={(isChecked: boolean) => { }}
                      iconStyle={{ borderRadius: 0 }}
                    // style={StyleSheet.flatten({
                    //   borderRadius: 0
                    // })}
                    />
                    <S.CheckBoxLabel>Eu li, estou ciente das condições de tratamento dos meus dados pessoais e dou meu consentimento, quando aplicável, conforme descrito nesta Política de Privacidade.</S.CheckBoxLabel>
                  </S.CheckBoxContainer>

                  <S.Column style={{
                    width: '100%',
                    alignItems: 'center'
                  }}>
                    <S.CustomButton style={{ marginTop: 20, marginBottom: 20 }} onPress={handleSignClickShopkeeper} >
                      <S.CustomButtonText>Cadastrar</S.CustomButtonText>
                    </S.CustomButton>
                  </S.Column>
                </>
              ) : (
                <>
                  <S.Column style={{
                    width: '100%',
                    alignItems: 'center'
                  }}>
                    <S.CustomButton style={{ marginTop: 20, marginBottom: 20 }} onPress={handleSignClick} >
                      <S.CustomButtonText>Cadastrar</S.CustomButtonText>
                    </S.CustomButton>
                  </S.Column>
                </>
              )}

              {/* <S.Column style={{
                width: '100%',
                alignItems: 'center'
              }}>
                <S.CustomButton style={{ marginTop: 20, marginBottom: 20 }} onPress={handleSignClick} >
                  <S.CustomButtonText>Cadastrar</S.CustomButtonText>
                </S.CustomButton>
              </S.Column> */}

            </S.InputArea>
          </ScrollView>
        </KeyboardAvoidingView>
      </S.LoginContainer>
    </S.Container>
  )
};
