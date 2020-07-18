import React, { Component } from "react";
import axios from "axios";
import "../Admin/ajout.css";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ajout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ref: null,
      desig: null,
      nom: null,
      prix: null,
      qte: null,
      remise: null,
      file: null,
      categ: null,
      modele: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const uploadedImageInfo= await this.uploadFile(this.state.file);
    console.log(uploadedImageInfo);
    
      if (
      !this.state.ref ||
      !this.state.desig ||
      !this.state.nom ||
      !this.state.prix ||
      !this.state.modele ||
      !this.state.file ||
      !this.state.qte ||
      !this.state.remise ||
      !this.state.categ
    ) {
      return alert("Please first fill all the fields");
    }

    let url = "http://localhost:5000/piece/newpiece";
    const data = {
      ref: this.state.ref,
      desig: this.state.desig,
      nom: this.state.nom,
      prix: this.state.prix,
      qte: this.state.qte,
      remise: this.state.remise,
      categ: this.state.categ,
      modele: this.state.modele,
      file: uploadedImageInfo.image
    };

    console.log("data", data);
    await axios
      .post(url, data)
      .then(response => {
        console.log(response);
        window.location.reload()      

      })
      .catch(error => {
        console.log(error);
      });
  };
  onChange = e => {
    this.setState({ file: e.target.files[0] });
  };

  uploadFile = async file => {
    const fd = new FormData();
    fd.append("file", file);
    try {
          const res = await axios.post("http://localhost:5000/piece/uploadimage", fd);
          console.log(res.data);
          return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
         <div id="wrapper">
    <ul class="navbar-nav bg-gradient sidebar sidebar-dark accordion" id="accordionSidebar">
    
      <div class="sidebar-brand d-flex align-items-center justify-content-center" >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="ti-themify-favicon"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Magasinier </div>
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
            <span class="mr-2 d-none d-lg-inline text-gray-600 small">Alaa Sakly </span>
            <img class="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt =''/>
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
          <a class="btn btn-primary" href="/">Logout</a>
        </div>
      </div>
    </div>
  </div>
    <br />
        <br />
        <br />
        <br />
        <figure className="figpiece">
          <h1>Ajouter une pièce </h1>
        </figure>
        <div class="container ">
          <form onSubmit={this.handleSubmit}  enctype="multipart/form-data">
            <div class="row">
              <div class="col">
                <label for="exampleFormControlFile1">Modèle</label>
                <select
                  class="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  name="modele"
                  onChange={this.handleInputChange} required
                >
                  <option selected>Choisir... </option>
                  <option value="kia">Kia</option>
                  <option value="hyundai">Hyundai</option>
                </select>
              </div>
              
            </div>

            <div class="row">
              <div class="col">
                <div class="form-group pt-3">
                  <label for="exampleFormControlFile1">La Référence</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Default input"
                    name="ref"
                    onChange={this.handleInputChange} required
                  ></input>
                </div>
              </div>

              <div class="col pt-3">
                <label for="exampleFormControlFile1"> La Categorie</label>
                <select
                  class="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  name="categ"
                  onChange={this.handleInputChange} required
                >
                  <option selected>Choisir...</option>
                  <option value="Transmission">Transmission </option>
                  <option value="Consommables">Consommables </option>
                  <option value="Equipement intèrieur">
                    Equipement intèrieur{" "}
                  </option>
                  <option value="Suspension et direction">
                    Suspension et direction{" "}
                  </option>
                  <option value="Tolerie et vitrage">
                    Tolerie et vitrage{" "}
                  </option>
                  <option value="Electricité">Electricité </option>
                </select>
              </div>
            </div>
            <div class="form-group pt-3 ">
              <label for="exampleFormControlFile1">Désignation </label>
              <textarea
                class="form-control"
                type="text"
                placeholder="Default input"
                name="desig"
                onChange={this.handleInputChange} required
              ></textarea>
            </div>
            <div class="row ">
              <div class="col">
                <div class="form-group  ">
                  <label for="exampleFormControlFile1">
                    Le nom du piece :{" "}
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Default input"
                    name="nom"
                    onChange={this.handleInputChange} required
                  ></input>
                </div>
              </div>
              <div class="col">
                <div class="form-group ">
                  <label for="exampleFormControlFile1">
                    La prix du piece :{" "}
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Default input"
                    name="prix"
                    onChange={this.handleInputChange} required
                  ></input>
                </div>
              </div>
            </div>
            <div class="form-group pt-3">
              <label for="exampleFormControlFile1">
                {" "}
                la quantité du piece :{" "}
              </label>
              <input
                class="form-control"
                type="text"
                placeholder="Default input"
                name="qte"
                onChange={this.handleInputChange} required
              ></input>
            </div>

            <div class="form-group ">
              <label for="exampleFormControlFile1"> Remise : </label>
              <input
                class="form-control"
                type="text"
                placeholder="Default input"
                name="remise"
                onChange={this.handleInputChange} required
              ></input>
            </div>

            <div class="form-group ">
              <label for="exampleFormControlFile1">Example file input</label>
              <input
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
                name="file"
                onChange={this.onChange} required
              />
            </div>

            <div class="row pt-5">
              <button
                type="submit"
                class="btn btn-primary center-block"
                id="but"
              >
                Publier
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
      </div>
      </div>
       
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.isAuthenticated
  };
}

export default compose(connect(mapStateToProps))(withRouter(ajout));