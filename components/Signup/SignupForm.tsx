import  React, { memo, useContext } from 'react';
import { GlobalStateContext } from '../../GlobalState/context/GlobalStateContext';
import { closeSignupForm } from './Utility/SignupFormUtils';
import { Slide } from 'react-awesome-reveal';

const SignupForm = () => {
  const { globalState, dispatch } = useContext(GlobalStateContext);

  return (
    <div>
      {globalState.isSignupFormOpen && (
        <form className={'signup_form'}>
          <h3>Sign up for Beta</h3>
          <label className={'signup_label'}>Email</label>
          <input
            className={'signup_input'}
            type="text"
            placeholder="Email or Phone"
            id="username"
          />

          <label className={'signup_label'}>Business Name</label>
          <input
            className={'signup_input'}
            type="text"
            placeholder="Email or Phone"
            id="username"
          />

          <label className={'signup_label'}>Business Address</label>
          <input
            className={'signup_input'}
            placeholder="Password"
            id="password"
          />

          <label className={'signup_label'}>Business Website</label>
          <input className={'signup_input'} placeholder="Password" />

          <label className={'signup_label'}>Password</label>
          <input
            className={'signup_input'}
            placeholder="Password"
            id="password"
          />

          <button className={'signup_button'}>Log In</button>
          <button
            onClick={() => {
              closeSignupForm(dispatch);
            }}
            className={'signup_button'}
          >
            Close
          </button>
        </form>
      )}
    </div>
  );
};

export default memo(SignupForm);
