import React, { Component } from 'react';
import setAuthToken from '../../utils/Authorization';
import * as actions from '../../actions/index'
import { connect} from 'react-redux';
import {compose} from 'redux';
import {  reduxForm} from 'redux-form';
import Axios from 'axios'; 
import './mag.css'; 

class Profilepage extends Component {
    constructor(props){
        super(props);
        this.state={
            profile : ''
        }
    }
    async componentDidMount(){
        const t = this.props.token
        console.log("token",t);
        
         await Axios.get('http://localhost:5000/users/secretA',setAuthToken(t))
        .then((response)=>{
            if(response.status===200 && response!= null )
        {
          this.setState({profile : response.data.local})
        }
        })
        
    }
    render() {
        console.log("profile",this.state.profile);
        
        return (
            <div>
             
            </div>
        );
    }
}

function mapStateToProps(state) {
	return {
	  errorMessage: state.auth.errorMessage,
      isAuth : state.auth.isAuthenticated,
      token: state.auth.token,

	}
  }

export default compose(
    connect(mapStateToProps,actions),
            reduxForm({form : 'profile'}))(Profilepage)