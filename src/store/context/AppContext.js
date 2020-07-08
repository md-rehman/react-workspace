import React, { createContext, useReducer } from 'react';
import { AppReducer } from '../reducer/AppReducer';

export const AppContext = createContext();

export const AppContextProvider = props => {
  const { children } = props;
  const initState = {
    activeBoard: 0,
    activeMainTheme: 'light',
    activeTemplate: 'template1',
  }

  const [state, dispatch] = useReducer(AppReducer, initState);

  return (
    <AppContext.Provider value={ { state, dispatch } }>
      { children }
    </AppContext.Provider>
  )
}