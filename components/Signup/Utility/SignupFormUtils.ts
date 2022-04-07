import GlobalStateActions from "../../../GlobalState/Actions/GlobalStateActions";

const openSignupForm = (dispatch: any) => {
  dispatch({ type: GlobalStateActions.TOGGLE_SIGNUP_FORM, payload: true });
};
const closeSignupForm = (dispatch: any) => {
  dispatch({ type: GlobalStateActions.TOGGLE_SIGNUP_FORM, payload: false });
};

export { openSignupForm, closeSignupForm };
