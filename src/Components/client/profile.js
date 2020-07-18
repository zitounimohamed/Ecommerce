import React, { Component } from 'react';
import './profile.css';
import Axios from 'axios';
import { connect } from 'react-redux';
import user from '../img/user.png';

class profile extends Component {
  constructor(props){
    super(props); 
    this.state={
      profile : ''
    }
  }
  
 async componentDidMount(){
    const id = localStorage.getItem('id')
    await Axios.get(`http://localhost:5000/users/profileA/${id}`).
    then((response)=>{
      this.setState({
        profile : response.data.local
      })

    })
    
  }
  render() {
    return (
      <div><div class="container emp-profile">
      <form method="post">
          <div class="row">
              <div class="col-md-4">
                  <div class="profile-img">
                      <img src={user} alt=""/>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="profile-head">
                              <h5>
                              {this.state.profile.nom} {this.state.profile.prenom}
                              </h5>
                          <br/><br/>  
                      <ul class="nav nav-tabs" id="myTab" role="tablist">
                          <li class="nav-item">
                              <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Profile</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Historique</a>
                          </li>
                      </ul>
                  </div>
              </div>
          
          </div>
          <div class="row">
              <div class="col-md-4">
              </div>
              <div class="col-md-8">
                  <div class="tab-content profile-tab" id="myTabContent">
                      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                  <div class="row">
                                      <div class="col-md-6">
                                          <label>Name</label>
                                      </div>
                                      <div class="col-md-6">
                                          <p>{this.state.profile.nom} {this.state.profile.prenom}</p>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-md-6">
                                          <label>Email</label>
                                      </div>
                                      <div class="col-md-6">
                                          <p>{this.state.profile.email}</p>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-md-6">
                                          <label>Phone</label>
                                      </div>
                                      <div class="col-md-6">
                                          <p><p>{this.state.profile.tel}</p></p>
                                      </div>
                                  </div>
                                  
                      </div>
                      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

    <div class="container-fluid">
          <div class="card shadow mb-4">
            <div class="card-body">
              <div class="table-responsive">
           
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              
                  <thead>
                    <tr>
                      <th>Les aricles achetés </th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  
                  <tbody>
                 {/* {this.state.facture.map(facture => (
                    <tr key={facture._id}>
                      <td><Link to ={`/facture/${facture._id}`}className= "py-2 mr-1"><i class="fa fa-arrow-circle-right pl-5" aria-hidden="true" style={{fontSize: 25, color:'orange'}}></i></Link></td>
                      <td>{facture._id}</td>
                      <td>{facture.shipping.nom}</td>
                      <td><div><center><i class="fa fa-handshake-o" aria-hidden="true" style={{fontSize: 25, color:'orange'}}></i>
                      <button className="buttona" onClick={()=> this.delete(facture._id)} ><i class="fa fa-trash " aria-hidden="true" style={{fontSize:25 , color : "gray"}}></i></button></center></div></td>
                  
                      
                 </tr>))} */}
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </div> 
                      </div>
                  </div>
              </div>
          </div>
      </form>           
  </div></div>
    );
  }
}

function mapStateToProps(state) {
  return {
    
    isClient : state.auth.isClient
  }
}

export default connect(mapStateToProps)(profile);