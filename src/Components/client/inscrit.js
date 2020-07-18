import React, { Component } from 'react';
import Googlelogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login'
import signup_image from '../img/signup-image.jpg';
import {reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import {compose} from 'redux';
import * as actions from '../../actions';

import  './inscrit.css';

class Inscription extends Component {
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

        this.handleSubmit = this.handleSubmit.bind(this);
	    this.handleInputChange = this.handleInputChange.bind(this)
	    this.responseGoogle = this.responseGoogle.bind(this);
	    this.responseFacebook = this.responseFacebook.bind(this);
    }


        handleInputChange = (event) =>{
        this.setState({
            
            [event.target.name]: event.target.value
                    })
        }
  
        handleSubmit = async (event)=>{
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

            if (!this.props.errorMessage) {
                this.props.history.push('/home');}

}
    
        async responseGoogle(res){
            await this.props.oauthGoogle(res.accessToken);
            if (!this.props.errorMessage) {
                this.props.history.push('/home');
		    }
        }
        
        async responseFacebook(respo){
		    await this.props.oauthFacebook(respo.accessToken);
            if (!this.props.errorMessage) {
            this.props.history.push('/home');
		    }
        }

    render() {
        return (
 <div class="mainn">
    <section class="signup">
            <div class="containerrr">
                <div class="signup-content" style ={{marginTop: '8%', marginBottom : '-16%'}} >
                    <div class="signup-form">
                        <h2 class="form-title">Sign up</h2>
                        <form method="POST" class="register-form" id="register-form" onSubmit={this.handleSubmit}>
                            <div class="form-group">
                                <label className='labe' for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="nom" id="name" placeholder="votre nom " onChange={this.handleInputChange} />
                            </div>
                            <div class="form-group">
                                <label className='labe' for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="prenom" id="name" placeholder="votre prenom " onChange={this.handleInputChange} />
                            </div>
                            <div class="form-group">
                                <label className='labe'for="email"><i class="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="votre Email" onChange={this.handleInputChange}/>
                            </div>
                            { this.props.errorMessage ? 
						<div className="alert alert-warning">
							{this.props.errorMessage}
						</div>: null }
                            <div class="form-group">
                                <label className='labe'for="email"><i class="zmdi zmdi-phone"></i></label>
                                <input type="tel" name="tel" id="email" placeholder="votre numero de telephone " onChange={this.handleInputChange}/>
                            </div>
                            <div class="form-group">
                                <label className='labe' for="passworf"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="password" placeholder="Password" onChange={this.handleInputChange}/>
                            </div>
                            <div class="form-group">
                                <label className='labe' for="repeat_password"><i class="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="repeat_password" id="repeat_password" placeholder="Repeat your password" onChange={this.handleInputChange}/>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" onChange={this.handleInputChange}/>
                                <label className='labe' for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                            </div>
                            <div class='row pt-5'>
                        <button type='submit' class='btn btn-primary btn-lg ' id='but' >S'inscrire</button>
                        </div>
                        </form> </div>
                        
                    
                    <div class="signup-image pt-4">
                        <figure><img src={signup_image} alt="sing up image"/></figure>
                        <a href="signin" class="signup-image-link">I am already member</a><br/>
                        
                        <FacebookLogin
							appId="613778785843430"
							autoLoad={false}
							textButton="Facebook"
							fields="name,email,picture"
							callback={this.responseFacebook}
							cssClass="btn btn-outline-primary"
						/>
						<Googlelogin
							clientId="194598212731-cvleg0tnc694u5cbnps0m1dft6ie8iep.apps.googleusercontent.com"
							buttonText="Google"
							onSuccess={this.responseGoogle}
							onFailure={this.responseGoogle}
							cssClass="btn btn-outline-danger"
						/>
                        
                        

                    </div>
                </div>
            </div>
        </section>
          </div>
        
        );
    }}
    function  mapStateToProps(state) {
        return{
            errorMessage :  state.auth.errorMessage
        }
        
    }


    export default compose(
connect(mapStateToProps,actions),
        reduxForm({form : 'signup'}))(Inscription) 	;