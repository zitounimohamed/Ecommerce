import React, { Component } from "react";
import "./inscrit.css";
import signin_image from "../img/signin-image.jpg";
import { reduxForm } from "redux-form";
import {Link} from 'react-router-dom'

import Googlelogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login'
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../../actions";

class SignIN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log("data", data);
    await this.props.signin(data);
    if (this.props.isAdmin && !this.props.errorMessage) {
      window.location.href= '/admin'

    }else {
      if(this.props.isMaga){
        window.location.href= '/magasinier'

      }else  {
        if(this.props.isClient){
          window.location.href= '/home'

        }

      }
    }
  };
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
        <section class="sign-in">
          <div class="containerrr">
            <div class="signin-content" style ={{marginTop : '8%'}}>
              <div class="signin-image">
                <figure>
                  <img src={signin_image} alt="sing up image" />
                </figure>
                <a href="inscrit" class="signup-image-link">
                     Rejoignez-nous
                </a>
              </div>

              <div class="signin-form">
                <h2 class="form-title">S'authentifier </h2>
                <form
                  onSubmit={this.handleSubmit}
                  class="register-form"
                  id="login-form"
                >
                  <div class="form-group">
                    <label className="labe" for="your_name">
                      <i class="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      name="email"
                      name="email"
                      name="email"
                      placeholder="votre Email"
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div class="form-group">
                    <label className="labe" for="password">
                      <i class="zmdi zmdi-lock"></i>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  { this.props.errorMessage ? 
						<div className="alert alert-warning">
							{this.props.errorMessage}
						</div>: null }
                  <div class="form-group">
                    <input
                      type="checkbox"
                      name="remember-me"
                      id="remember-me"
                      class="agree-term"
                    />
                   
                  </div>
                  <div class="row">
                    <button
                      type="submit"
                      class="btn btn-primary btn-lg "
                      id="but"
                    >
                      Se Connecter
                    </button>
                  </div>
                </form>
                <div class="social-login " style ={{marginTop :'10%'}}>
                  <span class="social-label">se connecter via </span>
                  <ul class="socials">
        
                    <li>
                        <FacebookLogin
                      appId="613778785843430"
                      autoLoad={false}
                      textButton="Facebook"
                      fields="name,email,picture"
                      callback={this.responseFacebook}
                      cssClass="btn btn-outline-primary"
						        />
                    </li>
                    
						
                  </ul>
                </div>
                <div>
                  <Link to="/">Mot de passe oublié?</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

//Mapping dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    signin: (data) => dispatch(actions.signin(data)),
  };
};

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage,
    isAuth: state.auth.isAuthenticated,
    token: state.auth.token,
    isAdmin : state.auth.isAdmin,
    isClient : state.auth.role, 
    isMaga : state.auth.isMaga
  };
}
export default compose(connect(mapStateToProps, mapDispatchToProps))(SignIN);