import { useContext } from "react";
import {GlobalStateContext} from './StateContext'

type GlobalStateHook<T> = [T, (newState: any) => void];

export const useGlobalState = <T>() =>
  useContext(GlobalStateContext) as GlobalStateHook<T>;
