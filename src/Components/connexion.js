import React, { Component } from 'react';
import Connecter from './conexion/connecter';
import InscritP from './conexion/inscritp'
import CheckoutSteps from './shipping/CheckoutSteps';
class Connexion extends Component {

    render() {
        const isAuth = this.props.isAuth
        return (
    <div>  <div className ='container'><br/>
        <CheckoutSteps step1 ></CheckoutSteps>
        <figure className='figadmin'></figure><br/>
             <div className='row'>
                <div className='col-sm-5'>
                    <Connecter></Connecter>
                </div>
               
                <div className='col'>
                    <InscritP></InscritP>
                </div>
            </div>
        
        </div>

         
        
            
          
        </div>
         
        );
    }
    
}



export default Connexion;