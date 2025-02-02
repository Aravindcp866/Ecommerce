'use client';
import React, { createContext, useContext, useReducer } from 'react';

const ADD_TO_BAG = 'ADD_TO_BAG';

const initialState = {
  bag: [],
};

const bagReducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_TO_BAG:
      return { ...state, bag: [...state.bag, action.payload] };
    default:
      return state;
  }
};

const GlobalContext = createContext<any>({
  bag: [],
  addToBag: () => {},
});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(bagReducer, initialState);

  const addToBag = (product: any) => { debugger
    dispatch({ type: ADD_TO_BAG, payload: product });
  };

  return (
  <GlobalContext.Provider value={{ bag: state.bag, addToBag }}>
      {children}
    </GlobalContext.Provider>
  )
};

export const useData = () => useContext(GlobalContext);
