import React, { createContext, useReducer } from 'react';
import { initialState, userReducer } from '../reducers/UserReducer';

export const UserContext = createContext<any>({});

export const UserContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }} >
      {children}
    </UserContext.Provider>
  )
}