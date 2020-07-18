import axios from 'axios';
import {AUTH_SIGN_UP, AUTH_ERROR ,AUTH_SIGN_OUT,AUTH_SIGN_IN,GETPIECE,GETPIECES,ERROR} from './types'


export const oauthGoogle = data =>{
    return async dispatch =>{
        const res=await axios.post('http://localhost:5000/users/oauth/google', {
            access_token: data
          });
        console.log('resp',res);
        
        dispatch({
            type : AUTH_SIGN_UP,
            payload : res.data.token
        });
        
        localStorage.setItem("JWT_Token",res.data.token)
    };
}

export const oauthFacebook = data =>{
    return async dispatch =>{
        const resp = await axios.post('http://localhost:5000/users/oauth/facebook',{  access_token : data});
        console.log('resp',resp);
        
        dispatch({
            type : AUTH_SIGN_UP,
            payload : resp.data.token
        });
        
        localStorage.setItem("JWT_Token",resp.data.token)
    };
}



export const signup = data =>{
    return async dispatch => {
        try {
      const res= await axios.post('http://localhost:5000/users/signup',data);
            console.log("res",res);
            
           dispatch({
                type : AUTH_SIGN_UP,
                payload : res.data.token 
            });

            localStorage.setItem('JTW_Token',res.data.token);
        } catch (error) {
            dispatch({
                type : AUTH_ERROR,
                payload : 'Email déja utilisé !'
            })
            
        }
    };
}

export const signin = data =>{
  return async dispatch => {
      try {
          const res = await axios.post('http://localhost:5000/users/signin',data);
          console.log('res',res);

          dispatch({
              type : AUTH_SIGN_IN,
              payload : res.data.token,
              pay : res.data.isClient ,
              p : res.data.isAdmin,
              m : res.data.isMaga
             });

          localStorage.setItem('JTW_Token',res.data.token);
          localStorage.setItem('role',res.data.isClient);
          localStorage.setItem('admin',res.data.isAdmin);
          localStorage.setItem('magasinier',res.data.isMaga);
          localStorage.setItem('id',res.data.id);
         
      } catch (error) {
          dispatch({
              type : AUTH_ERROR,
              payload : 'Email ou Mot de passe incorrect !'
          })
          
      }
  };
}

export const signOut = () => {
    return async dispatch => {
        localStorage.clear()

      dispatch({
        type: AUTH_SIGN_OUT ,
        payload : ''
      })
    };

} 
export const getpiece =(_id,history)=> async (dispatch)=>{
    try {
        const res = await axios.get(
            `http://localhost:5000/piece/${_id}`
        );
        console.log(res);
        
        dispatch({
            type : GETPIECE ,
            payload : res.data

        });
    } catch (error) {
        history.push('/home')
        
    }
};

export const getpieces =()=> async (dispatch) =>{
    try {
        const res = await axios.get (
            `http://localhost:5000/piece/allpiece`
        ); 
        console.log(res);
        
        dispatch({
            type : GETPIECES ,
            payload : res.data
       });
    } catch (error) {
        dispatch({
            type : ERROR ,
            payload : "Erreur"
       });
        
    }
};  


export const getcom =(id)=> async (dispatch)=>{
    try {
        const res = await axios.get(
            `http://localhost:5000/orders/${id}`
        );
        console.log(res);
        
        dispatch({
            type : GETPIECE ,
            payload : res.data

        });
    } catch (error) {
        console.log(error);
                
    }
};