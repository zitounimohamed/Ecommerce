import React, { Component} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import * as actions from '../../actions/index'
import { getpieces } from '../../actions/index';
import Update from './updatepiec';
import './admin.css'
import {Link} from 'react-router-dom'
import {Input} from 'mdbreact';

class PieceScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
          piece: [],
          pieceone : null ,
            nom : ''
          }
 }
 getsearch = async () => {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
  };
  axios.post("http://localhost:5000/piece/all", { nom: this.state.nom })
    .then(result => 
      this.setState({
        piece: result.data
      })
      
      )
    .catch(error => console.log('error', error));
};
 async componentDidMount(){
    this.getsearch(this.state.nom)
 }

handleInputChange = (event) =>{
  this.setState({
    [event.target.name] : event.target.value
  });
}

delete(id){
  axios.delete(`http://localhost:5000/piece/${id}`)
  .then((response)=>{
    if(response.status===200 && response!= null)
    {
window.location.reload()      
    }
  })
  
}

 handleAddToCart = () => {
   const {history} = this.props;
   history.push("/cart/" + this.props.match.params.id + "?qty=" + this.state.qty)
  } 

  /*getone(id) {
    axios.get(`http://localhost:5000/piece/${id}`)
    
          .then((response) => {
            if(response.status===200 && response!= null )
            {
              this.setState({pieceone : response.data})
            }
         })
  }*/
render() {
    console.log(this.state.piece);
        

  return (
    
    <div id="wrapper">
    <ul class="navbar-nav bg-gradient sidebar sidebar-dark accordion" id="accordionSidebar">
    
      <div class="sidebar-brand d-flex align-items-center justify-content-center" >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="ti-themify-favicon"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Administrateur </div>
      </div>
    
      <hr class="sidebar-divider my-0"/>
    
      <li class="nav-item active ">
        <a class="nav-link" href="/admin">
        <i class="fa fa-tachometer" aria-hidden="true"></i>
         <span >Tableau de bord </span></a>
      </li>
    
      <hr class="sidebar-divider"/>
    
      <div class="sidebar-heading">
        Interface
      </div>
    
      <li class="nav-item">
        <a class="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
        <i class="fa fa-cogs" aria-hidden="true"></i>
          <span>Pieces </span>
        </a>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <a class="collapse-item" href="/product">Visualiser Les pieces  </a>
            <a class="collapse-item" href="/ajoutpiece">Ajouter des pieces</a>
          </div>
        </div>
      </li>
    
              <li class="nav-item">
            <a class="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseUtilitie" aria-expanded="true" aria-controls="collapseUtilities">
            <i class="fa fa-users" aria-hidden="true"></i>
              <span>Comptes</span>
            </a>
            <div id="collapseUtilitie" class="collapse" aria-labelledby="headingUtilitie" data-parent="#accordionSidebar">
              <div class="bg-white py-2 collapse-inner rounded">
                <a class="collapse-item" href="/gerercompte">Ajouter des magasiniers</a>
                <a class="collapse-item" href="/ajoutTrans">Ajouter des Transporteurs</a>
                <a class="collapse-item" href="/updatecompte">Gerer les comptes</a>
              </div>
            </div>
        
          </li>

            
      <li class="nav-item">
        <a class="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
        <i class="fa fa-archive" aria-hidden="true"></i>
          <span>Commandes</span>
        </a>
        <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <a class="collapse-item" href="/commande">Gerer les commandes</a>
          
          </div>
        </div>
      </li>
      <hr class="sidebar-divider"/>
    
    </ul>
    
    <div id="content-wrapper" class="d-flex flex-column">
    
      <div id="content">
    
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
    
          <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>
          <ul class="navbar-nav ml-auto">
    
            <li class="nav-item dropdown no-arrow d-sm-none">
              <a class="nav-link dropdown-toggle" href="/" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-search fa-fw"></i>
              </a>
            
              <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                <form class="form-inline mr-auto w-100 navbar-search">
                  <div class="input-group">
                    <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button">
                        <i class="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
    
            <div class="topbar-divider d-none d-sm-block"></div>
    
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="/" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Slouma Bhouri </span>
                <img class="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60"/>
              </a>
      
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <a class="dropdown-item" href="/">
                  <i class="fa fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </a>
                <a class="dropdown-item" href="/">
                  <i class="fa fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </a>
                <a class="dropdown-item" href="/">
                  <i class="fa fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/" data-toggle="modal" data-target="#logoutModal">
                <i class="fa fa-sign-out" aria-hidden="true"></i>
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>
        <div className="content content-margined container ">

        <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a class="btn btn-primary" href="login.html">Logout</a>
        </div>
      </div>
    </div>
  </div>

{/***************************************************************** */ }
    <div className="piece-header">
      <h3>piece
      <a class="collapse-item" href="/ajoutpiece"> <i class="fa fa-plus pl-4" aria-hidden="true"></i></a></h3>
               <div class="back-link">
                    <a href="/admin" style ={{paddingLeft:'90%'}}>  &lt;&lt; Dashboard</a> 
                </div> 
    </div> <br/>

    <div class="container-fluid">
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">DataTables </h6>
               <div className="col">
                            <Input label="Search Country" icon="search" name="nom" onChange={this.handleInputChange}/>
                            <button onClick={this.getsearch}>Chercher</button>
                        </div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
           
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Reference</th>
                      <th>Nom</th>
                      <th>Prix</th>
                      <th>categorie</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Photo</th>
                      <th>Reference</th>
                      <th>Nom</th>
                      <th>Prix</th>
                      <th>categorie</th>
                      <th>Action</th>
                    </tr>
                  </tfoot>
                  <tbody>
                  {this.state.piece.map(piece => (<tr key={piece._id}>
                      <td><center><img src={`http://localhost:5000/${piece.file}`} alt="product" style ={{width: 100 , height:50 }} /></center></td>
                      <td>{piece.ref}</td>
                      <td>{piece.nom}</td>
                      <td>{piece.prix}</td>
                      <td>{piece.categ}</td>
                      <td>
                   <div><center><Link to={`/updatepiec/${piece._id}`}><i class="fa fa-pencil-square-o -2xa pl-8" aria-hidden="true" style={{fontSize:35}} ></i></Link>
                   <button className="buttona" onClick={()=> this.delete(piece._id)} ><i class="fa fa-trash " aria-hidden="true" style={{fontSize:35}}></i></button></center></div>
                   </td>
                 </tr>))}
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
  
  );
          }
}
export default PieceScreen
;