import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (OriginalComponent) => {
    class MixedComponent extends Component {

    
      
    checkAuth() {
        
          if(this.props.isAdmin!="true"){ 
            const { history } = this.props;
          history.push("/home");
        }
           
        
      }
      
      

  
        
    componentDidMount() {
       
        this.checkAuth();
      }
  
      componentDidUpdate() {
        this.checkAuth();
      }



        render() {
            return <OriginalComponent  {...this.props}/>;
          }
        }
        function mapStateToProps(state) {
            return {
              isAuth: state.auth.isAuthenticated,
              jwtToken: state.auth.token,
              role : state.auth.role,
              isAdmin : state.auth.isAdmin

            }
          }
         
   
    return connect(mapStateToProps)(MixedComponent);
};