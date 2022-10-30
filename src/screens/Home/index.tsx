import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { UserContext } from '../../contexts/UserContext';
import { useNavigation } from '@react-navigation/native';

export const Home = () => {
  const { state: user } = useContext(UserContext);
  const navigation = useNavigation();
  console.log('User info =>', user.user)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
      <Text style={{ fontSize: 22 }} >
        Olá {user.user.name}, {user?.user?.company_name}! bem vindo!
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')} >
        <Text>Ir para o Login</Text>
      </TouchableOpacity>
    </View>
  )
}