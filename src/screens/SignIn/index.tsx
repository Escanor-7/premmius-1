import React, { useState, useContext } from 'react';
import { Image, KeyboardAvoidingView, StyleSheet, TextStyle } from 'react-native';
import * as S from './SignIn.styles';
import { SignInput } from '../../components/SignInput/index';
import { useNavigation } from '@react-navigation/native';
import Api from '../../Api';
import { UserContext } from '../../contexts/UserContext';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().required('Informe seu email.'),
  password: yup.string().min(6, 'A senha deve ter pelo menos 6 dígitos.').required('Informe sua senha.')
})

export const SignIn = () => {
  const { dispatch: userDispatch } = useContext(UserContext)
  const navigation = useNavigation();

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  // const [emailField, setEmailField] = useState('');
  // const [passwordField, setPasswordField] = useState('');

  const handleSignIn = async (data) => {
    console.log(data);
    if (!errors.email || !errors.password) {
      let res = await Api.signIn(data.email, data.password);

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
    // navigation.reset({
    //   routes: [{
    //     // name: 'SignUp'
    //     name: 'RegistrationChoice'
    //   }]
    // });
    navigation.navigate('RegistrationChoice');
  }

  const handleForgotMyPassword = () => {
    navigation.navigate('forgotPassword');
  }

  return (
    <S.Container>
      <S.LoginContainer>
        <S.RowBetween>
          <Image
            source={require('../../assets/premmius-logo.jpg')}
            style={{ width: 250, height: 100 }}
          />
        </S.RowBetween>

        <S.SubTitle style={{ marginTop: 20, marginBottom: 20, opacity: 0.8 }} >
          Acesse sua conta
        </S.SubTitle>
        <KeyboardAvoidingView>
          <S.InputArea>
            <Controller
              control={control}
              name='email'
              render={({ field: { onChange, onBlur, value } }) => (
                <SignInput
                  label='E-mail'
                  placeholder='exemplo@exemplo.com'
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholderColor='#e8e2e221'
                  labelStyle={StyleSheet.flatten<any>({
                    color: errors.password ? '#FF0000' : 'white',
                  })}
                  inputStyle={StyleSheet.flatten<any>({
                    borderBottomColor: errors.email ? '#FF0000' : 'white',
                  })}
                />
              )}
            />
            {errors.email && <S.ErrorMessage>{errors.email?.message}</S.ErrorMessage>}

            <Controller
              control={control}
              name='password'
              render={({ field: { onChange, onBlur, value } }) => (
                <SignInput
                  label='Senha'
                  placeholder='digite sua senha'
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  password={true}
                  placeholderColor='#e8e2e221'
                  labelStyle={StyleSheet.flatten<any>({
                    color: errors.password ? '#FF0000' : 'white',
                  })}
                  inputStyle={StyleSheet.flatten<any>({
                    borderBottomColor: errors.password ? '#FF0000' : 'white',
                  })}
                />
              )}
            />
            {errors.password && <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>}

            <S.SignMessageButton>
              <S.SignMessageButtonText onPress={handleForgotMyPassword} >Esqueci minha senha</S.SignMessageButtonText>
            </S.SignMessageButton>
            <S.Column style={{
              width: '100%',
              alignItems: 'center'
            }}>
              <S.CustomButton style={{ marginTop: 20 }} onPress={handleSubmit(handleSignIn)} >
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
