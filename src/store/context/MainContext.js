import React, { createContext, useReducer } from 'react';
import { MainReducer } from '../reducer/MainReducer';

export const MainContext = createContext();

export const MainContextProvider = props => {
  const { children } = props;

  const initState = [
    {
      name: 'Web Design',
      list: [
        [{ value: 'Things to do', type: 'mainHeader' }, { value: 'Owner', type: 'people' }, { value: 'Status', type: 'status' }, { value: 'Due Date', type: 'date' }, { value: 'Contact', type: 'number' }],
        [{ value: 'New item 1', type: 'mainHeader' }, { value: 'John', type: 'people' }, { value: 0, type: 'status' }, { value: 'Apr 9', type: 'date' }, { value: '', type: 'number' }],
        [{ value: 'Another item', type: 'mainHeader' }, { value: 'John', type: 'people' }, { value: 0, type: 'status' }, { value: 'Apr 11', type: 'date' }, { value: '', type: 'number' }],
        [{ value: 'One more item', type: 'mainHeader' }, { value: 'John', type: 'people' }, { value: 0, type: 'status' }, { value: 'Apr 14', type: 'date' }, { value: '', type: 'number' }],
        [{ value: 'Item returns', type: 'mainHeader' }, { value: 'John', type: 'people' }, { value: 0, type: 'status' }, { value: 'Apr 17', type: 'date' }, { value: '', type: 'number' }],
        [{ value: 'Item - last hope', type: 'mainHeader' }, { value: 'John', type: 'people' }, { value: 0, type: 'status' }, { value: 'Apr 17', type: 'date' }, { value: '', type: 'number' }],
        [{ value: null, type: 'blank' }, { value: null, type: 'blank' }, { value: null, type: 'status' }, { value: null, type: 'date' }, { value: '', type: 'number' }],
        
      ]
    },
    {
      name: 'Some other topic',
      data: [
        [{ value: 'Things to do', type: 'mainHeader' }, { value: 'Owner', type: 'people' }, { value: 'Status', type: 'status' }, { value: 'Due Date', type: 'date' }, { value: 'Contact', type: 'number' }],
        [{ value: 'New item 1', type: 'mainHeader' }, { value: 'John', type: 'people' }, { value: 0, type: 'status' }, { value: 'Apr 9', type: 'date' }, { value: '', type: 'number' }],
        [{ value: 'Another item', type: 'mainHeader' }, { value: 'John', type: 'people' }, { value: 0, type: 'status' }, { value: 'Apr 11', type: 'date' }, { value: '', type: 'number' }],
        [{ value: 'One more item', type: 'mainHeader' }, { value: 'John', type: 'people' }, { value: 0, type: 'status' }, { value: 'Apr 14', type: 'date' }, { value: '', type: 'number' }],
        [{ value: 'Item returns', type: 'mainHeader' }, { value: 'John', type: 'people' }, { value: 0, type: 'status' }, { value: 'Apr 17', type: 'date' }, { value: '', type: 'number' }],
        [{ value: 'Item returns', type: 'mainHeader' }, { value: 'John', type: 'people' }, { value: 0, type: 'status' }, { value: 'Apr 17', type: 'date' }, { value: '', type: 'number' }],
        [{ value: null, type: 'blank' }, { value: null, type: 'blank' }, { value: null, type: 'status' }, { value: null, type: 'date' }, { value: '', type: 'number' }],
        
      ]
    },
  ]

  const [state, dispatch] = useReducer(MainReducer, initState)

  return (
    <MainContext.Provider value={ { state, dispatch } }>
      { children }
    </MainContext.Provider>
  )
}