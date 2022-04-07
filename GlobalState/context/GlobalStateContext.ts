import {createContext} from 'react';
import GlobalStateInterface from '../Interface/GlobalStateInterface';

export const initalState: GlobalStateInterface = {
  isSignupFormOpen: false,
  isPricingInfoOpen: false,
}
interface GlobalStateContext {
  globalState: GlobalStateInterface,
  dispatch: any
}
export const GlobalStateContext =
    createContext<GlobalStateContext>({globalState: initalState, dispatch: undefined})
