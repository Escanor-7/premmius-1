import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './src/stacks/MainStack';
import { UserContextProvider } from './src/contexts/UserContext'

export const App = () => {
  return (
    <UserContextProvider >
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  );
};
