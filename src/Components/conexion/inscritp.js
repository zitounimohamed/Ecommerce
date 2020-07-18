import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import {compose} from 'redux';
import {Link} from 'react-router-dom';
import * as actions from '../../actions';

class InscritP extends Component {
    constructor ( props){
        super(props);
        this.state={
            nom : null,
            prenom:null,
            email : null,
            tel : null ,
            password : null,
            repeat_password : null
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleInputChange=this.handleInputChange.bind(this)
      }

      handleInputChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit =async(event)=>{
        event.preventDefault();
         const data ={
            nom : this.state.nom,
            prenom: this.state.prenom,
            email : this.state.email,
            tel : this.state.tel,
            password : this.state.password,
            repeat_password : this.state.repeat_password
         } 
         console.log("data", data)
         await this.props.signup(data);
    }

  render() {
        return (
            
                <form  class="register-form" onSubmit={this.handleSubmit}>
            <div class ='col '><b class ='pl-5'>INSCRIVEZ-VOUS</b><br/>
                <div class ='row pt-3 pl-5'>
                            <div class = 'col-sm-4'>
                                <div class='form-group'>
                                    <label for="exampleFormControlFile1">Nom d'utilisateur : (*) </label>
                                    <input class="form-control" type="text" placeholder="nom" name='nom' onChange={this.handleInputChange} required></input>
                                </div> 
                            </div>
                            <div class = 'col-sm-4'>
                                <div class='form-group'>
                                    <label for="exampleFormControlFile1">Prenom d'utilisateur : (*) </label>
                                    <input class="form-control" type="text" placeholder="prenom" name='prenom' onChange={this.handleInputChange} required></input>
                                </div> 
                            </div>
				        <div class='col-sm-4'>
				            <div class='form-group'>
                                 <label for="exampleFormControlFile1">Email : (*) </label>
                                 <input class="form-control" type="text" placeholder="Exemple@exemple.com" name='email' onChange={this.handleInputChange} required></input>
                            </div>
                       </div>
                    </div>

                    <div class ='row pt-3 pl-5'>
                    <div class='col-sm-4'>
				            <div class='form-group'>
                                 <label for="exampleFormControlFile1">Numero de tel : (*) </label>
                                 <input class="form-control" type="tel" placeholder="0000000" name='tel' onChange={this.handleInputChange} required></input>
                            </div>
                       </div>
                            <div class = 'col-sm-4'>
                                <div class='form-group'>
                                    <label for="exampleFormControlFile1">Mot de passe : (*) </label>
                                    <input class="form-control" type="password" placeholder="********" name='password' onChange={this.handleInputChange} required></input>
                                </div> 
                            </div>
				        <div class='col-sm-4'>
				            <div class='form-group'>
                                 <label for="exampleFormControlFile1">Confirmer le Mdp : (*) </label>
                                 <input class="form-control" type="password" placeholder="********" name='repeat_password' onChange={this.handleInputChange} required></input>
                            </div>
                                <hr/>
                                <div class='row'>
                                <Link to={'/shippingscreen'}> <button type='submit' class='btn btn-primary center-block' id='but' >S'INSCRIRE</button></Link>
                            </div> 
                       </div>
                    </div>
                </div>
            </form>
           
        );
    }

}
function  mapStateToProps(state) {
    return{
        errorMessage :  state.auth.errorMessage
    }
    
}


export default compose(
connect(mapStateToProps,actions),
    reduxForm({form : 'InscritP'})
)(InscritP) 	;