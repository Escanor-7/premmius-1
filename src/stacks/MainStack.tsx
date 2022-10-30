import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Preload } from '../screens/Preload/index';
import { SignIn } from '../screens/SignIn/index';
import { SignUp } from '../screens/SignUp/index';
import { Home } from '../screens/Home/index';
import { ForgotPassword } from '../screens/ForgotPassword/index';
import { RegistrationChoice } from '../screens/RegistrationChoice/index';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName='Preload' screenOptions={
      {
        headerShown: false
      }
    } >
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="RegistrationChoice" component={RegistrationChoice} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="forgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};
