import React from 'react'
import GlobalStateInterface from '../Interface/GlobalStateInterface';
import GlobalStateActions from '../Actions/GlobalStateActions';

const GlobalStateReducer: React.Reducer<GlobalStateInterface, any>  = (state: GlobalStateInterface, action: any) => {
  switch(action.type) {
  // Show/Hide SignUp form
  case GlobalStateActions.TOGGLE_SIGNUP_FORM:
    return {...state, isSignupFormOpen: action.payload}
  // Show/Hide Payment form
  case GlobalStateActions.TOGGLE_PRICING_FORM:
    console.log('here!!!')
    console.log(action.payload)
    return {...state, isPricingInfoOpen: action.payload}

  default:
    return state
  }

}
export default GlobalStateReducer;