import {AUTH_SIGN_UP, AUTH_ERROR,AUTH_SIGN_OUT,AUTH_SIGN_IN} from '../actions/types'


// Check is we have the token in local storage, if we have it so we are logged in
function checkAuthentication() {
    const token = localStorage.getItem("JTW_Token");
    const role = localStorage.getItem("role")  ;
    const isAdmin= localStorage.getItem("admin");
    const isMaga= localStorage.getItem("magasinier")
    const id = localStorage.getItem('id')

    if (token) {
      return {
        isAuthenticated: true,
        token,
        role,
        id,
        isMaga,
        isAdmin,
        errorMessage: ""
        
      };
    }
    return {
      isAuthenticated: false,
      token: "",
      role : "",
      id: "",
      isMaga:"",
      isAdmin : "",
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
            return { ...state, token :action.payload,isAuthenticated: true,role:action.pay,isMaga:action.m, isAdmin : action.p,errorMessage: '' }
        case AUTH_SIGN_OUT:
            return { ...state, token :action.payload, isAuthenticated: false, errorMessage: '' }
        case AUTH_ERROR : 
            return{...state,errorMessage : action.payload}
        
        default:
            return state;
    }
}