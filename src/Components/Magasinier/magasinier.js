import React, { Component } from 'react';
import '../Admin/admin.css';
import axios from 'axios';

class magasinier extends Component {

  constructor(props){
    super(props);
    this.state = {
      piece: [],
      facture: [],
      num : 0,
      commande : [],
      }
}

async numOfUsers () {
  await axios.get("http://localhost:5000/users/count")
  .then((response) => {
    if(response.status===200 && response!= null )
    {
      this.setState({num : response.data})
    }
 })
}
async numOfMag () {
  await axios.get("http://localhost:5000/users/countm")
  .then((response) => {
    if(response.status===200 && response!= null )
    {
      this.setState({numM : response.data})
    }
 })
}
async lastProduct(){
  await axios.get("http://localhost:5000/piece/allpiece")
  .then((response)=> {
    if(response.status===200 && response!= null){
      this.setState({piece : response.data})
    }
  })
    
}

async numOfComm () {
  await axios.get("http://localhost:5000/orders/numComm")
  .then((response) => {
    if(response.status===200 && response!= null )
    {
      this.setState({numb : response.data})
    }
 })
}

async LastCom() {
  await axios.get("http://localhost:5000/orders/limitcom")
  .then((response) => {
    if(response.status===200 && response!= null )
    {
      this.setState({facture : response.data})
    }
 })
}

async componentDidMount(){
  this.numOfUsers()
  this.numOfMag()
  this.lastProduct()
  this.LastCom()
  this.numOfComm()
 }
 

  render() {
      console.log(this.state.num);
      console.log(this.state.piece);
      console.log(this.state.commande);
      console.log(this.state.numb);
      console.log(this.state.numM);
   
    return (
      <div>
   <div id="wrapper">
    <ul class="navbar-nav bg-gradient sidebar sidebar-dark accordion" id="accordionSidebar">
    
      <div class="sidebar-brand d-flex align-items-center justify-content-center" >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="ti-themify-favicon"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Magasinier</div>
      </div>
    
      <hr class="sidebar-divider my-0"/>
    
      <li class="nav-item active ">
        <a class="nav-link" href="/magasinier">
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
            <a class="collapse-item" href="/productm">Visualiser Les pieces  </a>
            <a class="collapse-item" href="/ajoutpiecem">Ajouter des pieces</a>
            <a class="collapse-item" href="/updatepiecm">Modifier des pieces </a>
    
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
            <a class="collapse-item" href="/CommandeM">Gerer les commandes</a>
          
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
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Alaa Sakly</span>
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
{/***************************************************** */}
<section class="content">
        <div class="container-fluid">
         
          <div class="row">
            <div class="col-12 col-sm-6 col-md-3">
              <div class="info-box">
                <span class="info-box-icon bg-info elevation-1"><i class="fa fa-cog"></i></span>
  
                <div class="info-box-content">
                  <span class="info-box-text">New Orders</span>
                  <span class="info-box-number">
                    10
                    <small>%</small>
                  </span>
                </div>
           
              </div>
           
            </div>
   
            <div class="col-12 col-sm-6 col-md-3">
              <div class="info-box mb-3">
                <span class="info-box-icon bg-danger elevation-1"><i class="fa fa-users"></i></span>
  
                <div class="info-box-content">
                  <span class="info-box-text">Nombre magasiniers</span>
                  <span class="info-box-number">{this.state.numM}</span>
                </div>
              
              </div>
       
            </div>
        
            <div class="clearfix hidden-md-up"></div>
  
            <div class="col-12 col-sm-6 col-md-3">
              <div class="info-box mb-3">
                <span class="info-box-icon bg-success elevation-1"><i class="fa fa-shopping-cart"></i></span>
  
                <div class="info-box-content">
                  <span class="info-box-text">Ventes</span>
                  <span class="info-box-number">{this.state.numb}</span>
                
                </div>
                
              </div>
            
            </div>
        
            <div class="col-12 col-sm-6 col-md-3">
              <div class="info-box mb-3">
                <span class="info-box-icon bg-warning elevation-1"><i class="fa fa-users"></i></span>
  
                <div class="info-box-content">
                  <span class="info-box-text">Nombre magasinier</span>
                  <span class="info-box-number">{this.state.num}</span>
                </div>
              </div> 
            </div>
         
          </div>
    
  
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">Monthly Recap Report</h5>
                </div>
            
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-8">
                      <p class="text-center">
                        <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
                      </p>
  
                      <div class="chart">
                  
                        <canvas id="salesChart" height="180" style={{height: 180}}></canvas>
                      </div>
                   
                    </div>
             
                    <div class="col-md-4">
                      <p class="text-center">
                        <strong>Goal Completion</strong>
                      </p>
  
                      <div class="progress-group">
                        Add Products to Cart
                        <span class="float-right"><b>160</b>/200</span>
                        <div class="progress progress-sm">
                          <div class="progress-bar bg-primary" style={{width: 80}}></div>
                        </div>
                      </div>
   
  
                      <div class="progress-group">
                        Complete Purchase
                        <span class="float-right"><b>310</b>/400</span>
                        <div class="progress progress-sm">
                          <div class="progress-bar bg-danger" style={{width: 75}}></div>
                        </div>
                      </div>
  
                      
                      <div class="progress-group">
                        <span class="progress-text">Visit Premium Page</span>
                        <span class="float-right"><b>480</b>/800</span>
                        <div class="progress progress-sm">
                          <div class="progress-bar bg-success" style={{width: 60}}></div>
                        </div>
                      </div>
  
                      
                      <div class="progress-group">
                        Send Inquiries
                        <span class="float-right"><b>250</b>/500</span>
                        <div class="progress progress-sm">
                          <div class="progress-bar bg-warning" style={{width: 50}}></div>
                        </div>
                      </div>
                    
                    </div>
               
                  </div>
           
                </div>
                
              </div>
          
            </div>

          </div>
      
           <div class="row" style={{marginTop :"22px"}}>
    
           <div class="col-md-8">

<div class="card">
  <div class="card-header border-transparent">
    <h3 class="card-title">Dernières commandes</h3>
  </div>
          
            <div class="card-body p-0">
              <div class="table-responsive">
                <table class="table m-0">
                  <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Nom et Prenom</th>
                    <th>Prix</th>
                    <th>Date de livraison</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.facture.map(facture => (
                  <tr key={facture._id}>
                    <td>{facture._id}</td>
                    <td>{facture.shipping.nom}</td>
                    <td>{facture.itemsPrice} </td>
                    <td><span class="badge badge-success">Non delevered</span></td>
              
                  </tr>
                  ))}
                  </tbody>
                    </table>
                  </div>
                 
                </div>
                
                <div class="card-footer clearfix">
                <center><a href="/CommandeM" class="uppercase">Afficher toutes les commandes</a></center> 
                </div>
       
              </div>
             
            </div>
            
            <div class="col-md-4">
        
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">pièce récemment ajoutés</h3>
                </div>
          
                <div class="card-body p-0">
                  <ul class="products-list product-list-in-card pl-2 pr-2">
                  {this.state.piece.map(piece =>(
                    <li class="item">
                      <div class='row'>
                      <div class="col-md-4 product-img">
                        <img src={`http://localhost:5000/${piece.file}`}s alt="Product Image" class="img-size-50"/>
                      </div>
                      <div class=" col-md-8 product-info">
                        <a href="javascript:void(0)" class="product-title">{piece.nom}
                          <span class="badge badge-warning float-right">{piece.prix}</span></a>
                        <span class="product-description">
                          {piece.categ}
                        </span>
                      </div>
                      </div>
                    </li>))}
                  </ul>
                </div>
         
                <div class="card-footer text-center">
                  <a href="/productm" class="uppercase">Afficher tous les produits</a>
                </div>
              </div>
             
            </div>
            </div>
       </div>
      </section>
  </div>
       </div>
          </div>
          </div>
      </div>
    );
  }
}

export default magasinier;