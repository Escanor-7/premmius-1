import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { UserContext } from '../../contexts/UserContext';

export const Home = () => {
  const { state: user } = useContext(UserContext);
  console.log('User info =>', user.user)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
      <Text style={{ fontSize: 22 }} >
        Olá {user.user.name}, bem vindo !
      </Text>
    </View>
  )
}