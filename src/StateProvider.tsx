import React, {useReducer,PropsWithChildren} from "react";
import { GlobalStateContext } from './StateContext';
import { stateReducer } from './Reducer';



export const StateProvider = <T,>(props: PropsWithChildren<{initialState?: T}>) => {
  const state = props.initialState ? props.initialState : {} as T;
  return(<GlobalStateContext.Provider value={useReducer(stateReducer<T>(), state)}>
    {props.children}
  </GlobalStateContext.Provider>)
};

