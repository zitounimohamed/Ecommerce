import React, { Component , } from 'react';
import {reduxForm} from 'redux-form';
import { connect , useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {compose} from 'redux';
import * as actions from '../../actions';
import FacebookLogin from 'react-facebook-login'




class connecter extends Component {
    constructor ( props){
        super(props);
        this.state={
            email : null,
            password : null
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleInputChange=this.handleInputChange.bind(this)
                this.responseFacebook = this.responseFacebook.bind(this);
               
      }

        handleInputChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit =async(event)=>{
        event.preventDefault();
         const data ={
            email : this.state.email,
            password : this.state.password,
         } 
         console.log("data", data)
         await this.props.signin(data);

    }


    async responseFacebook(respo){
        await this.props.oauthFacebook(respo.accessToken);
        if (!this.props.errorMessage) {
        this.props.history.push('/home');
        }
    }
 


    render() {
        const {handleSubmit}=this.props;
        return (
           
            <form onSubmit={this.handleSubmit}>
                <div class ='row'>
                <div class ='col'><b>CONNECTEZ-VOUS</b><br/>
                    <div class ='row pt-3'> 
                        <div class='col'>
				            <div class='form-group'>
                            <label for="exampleFormControlFile1">Email: (*) </label>
                                 <input class="form-control" type="text" placeholder="Exemple@exemple.com" name='email' onChange={this.handleInputChange} required></input>
                            </div> 
                            <span class="ti-alert" aria-hidden="true"> Mot passe oublié</span>
				        </div>
				        <div class='col'>
				            <div class='form-group'>
                                 <label for="exampleFormControlFile1">Mot de passe : </label>
                                 <input class="form-control" type="password" placeholder="********" name='password' onChange={this.handleInputChange} required></input>
                            </div>
                            <div class='row'>
                              <Link to={'/shippingscreen'}><button type='submit' class='btn btn-primary center-block' id='but' >CONNECTER</button></Link>
                            
                           
                            </div> 
				        </div>
				    </div> <hr/> 
                    <FacebookLogin
							appId="613778785843430"
							autoLoad={false}
							text="Connecter avec Facebook"
							fields="name,email,picture"
							callback={this.responseFacebook}
							cssClass="btn btn-outline-primary"
						/>
                    
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
            reduxForm({form : 'connecter'})
        )(connecter) 	;
