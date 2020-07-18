import {AUTH_SIGN_UP, AUTH_ERROR,AUTH_SIGN_OUT,AUTH_SIGN_IN} from './types'


// Check is we have the token in local storage, if we have it so we are logged in
function checkAuthentication() {
    const token = localStorage.getItem("JTW_Token");
    const id = localStorage.getItem("id")

    if (token) {
      return {
        isAuthenticated: true,
        token,
        id,
        errorMessage: ""
      };
    }
    return {
      isAuthenticated: false,
      token: "",
      id : "",
      errorMessage: ""
    };
  }

  // providing the reducer with the default state so when we refresh the page this state will be the first state we'll have
  const DEFAULT_STATE = checkAuthentication();


export default (state=DEFAULT_STATE ,action)=>{
    switch (action.type) {
        case AUTH_SIGN_UP:
            return {...state, token: action.payload,isAuthenticated: true, errorMessage : ''};
        case AUTH_SIGN_IN:
            return { ...state, token :action.payload,isAuthenticated: true, userInfo : action.pay,errorMessage: '' }
        case AUTH_SIGN_OUT:
            return { ...state, token :action.payload, isAuthenticated: false, errorMessage: '' }
        case AUTH_ERROR :
            return{...state,errorMessage : action.payload}

        default:
            return state;
    }
}
