import React, { Component } from "react";
import { connect } from "react-redux";
import "./nav.css";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import * as actions from "../actions";

class nav extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    console.log("signOut got called ! ");
    this.props.signOut();
  }

  render() {
    const isClient = this.props.isClient;
    const client = isClient ? null : (
      <a
        className="nav-link js-scroll-trigger"
        href="/profilec"
        key="profile"
        style={{ color: "black" }}
      >
        {" "}
        Mon Compte
      </a>
    );
    const mycompte = isClient ? null : (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Mon Compte
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>{client}</DropdownItem>

          <DropdownItem divider />
          <DropdownItem className="nav-item">
            <a
              className="nav-link js-scroll-trigger"
              href="/signin"
              onClick={this.signOut}
              key="logout"
              style={{ color: "black" }}
            >
              Deconnexion
            </a>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
    const { isAuth } = this.props;
    if (!isAuth) {
      return (
        <div>
          <div class="wrap">
            <div class="container">
              <div class="row justify-content-between">
                <div class="col-md-3 d-flex align-items-center">
                  <a class="navbar-brand" href="/home">
                    Sayaratna<span>.</span>TN
                  </a>
                </div>
                <div class="col-md-8">
                  <div class="row">
                    <div class="col">
                      <div class="top-wrap d-flex pr-6">
                        <div class="icon d-flex align-items-center justify-content-center">
                          <span class="fa fa-location-arrow"></span>
                        </div>
                        <div class="text">
                          <span style={{ color: "white" }}>Email </span>
                          <span>kia.monastir@gmail.com</span>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="top-wrap d-flex">
                        <div class="icon d-flex align-items-center justify-content-center">
                          <span class="fa fa-location-arrow"></span>
                        </div>
                        <div class="text">
                          <span style={{ color: "white" }}>Appeler nous</span>
                          <span> +216 73 531 139</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md d-flex justify-content-end align-items-center">
                      <div class="social-media col-md-9">
                        <p class="mb-0 d-flex " style={{ color: "white" }}>
                          <a
                            href="inscrit"
                            class="d-flex align-items-center justify-content-center pl-3"
                          >
                            <span class=" pr-3 ti-user" aria-hidden="true">
                              <i class="sr-only"></i>
                            </span>
                          </a>
                          Mon Compte
                        </p>
                      </div>
                      <div class="social-media col-md-5">
                        <p class="mb-0 d-flex" style={{ color: "white" }}>
                          <a
                            href="panier"
                            class="d-flex align-items-center justify-content-center pl-3 "
                          >
                            <span class=" pr-3 ti-shopping-cart ">
                              <i class="sr-only "></i>
                            </span>
                          </a>
                          Mon panier
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav
            class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light "
            id="ftco-navbar"
          >
            <div class="container">
              <button
                class="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#ftco-nav"
                aria-controls="ftco-nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars"></i>Menu
              </button>

              <form action="#" class="searchform order-lg-last">
                <div class="form-group d-flex">
                  <input
                    type="text"
                    class="form-control pl-3"
                    placeholder="Search"
                  />
                  <button
                    type="submit"
                    placeholder=""
                    class="form-control search"
                  >
                    <span class="fa fa-search"></span>
                  </button>
                </div>
              </form>

              <div class="collapse navbar-collapse" id="ftco-nav">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a href="/home" class="nav-link">
                      Home
                    </a>
                  </li>

                  <li class="nav-item">
                    <div class="collapse navbar-collapse js-navbar-collapse">
                      <ul class="nav navbar-nav ">
                        <li class="dropdown mega-dropdown nav-item">
                          <a
                            href="/"
                            class="dropdown-toggle nav-link"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Collection{" "}
                          </a>

                          <ul class="dropdown-menu mega-dropdown-menu row  ">
                            <div className="row">
                              <ul class="col-sm-4 pl-5">
                                <li class="dropdown-header">Consommables</li>
                                <li>
                                  <a className="catego" href="/">
                                    Filtres
                                  </a>
                                </li>
                                <li>
                                  <a className="catego" href="/">
                                    Freinage
                                  </a>
                                </li>
                                <li>
                                  <a className="catego" href="/">
                                    Bougies
                                  </a>
                                </li>
                                <li>
                                  <a className="catego" href="/">
                                    Courroie
                                  </a>
                                </li>
                                <hr style={{ width: 210 }} />
                                <li class="dropdown-header">
                                  Tolerie et vitrage
                                </li>
                                <li>
                                  <a className="catego" href="/">
                                    {" "}
                                    Port Capot
                                  </a>
                                </li>
                                <li>
                                  <a className="catego" href="/">
                                    {" "}
                                    Pare choc{" "}
                                  </a>
                                </li>
                              </ul>

                              <li class="col-sm-4">
                                <ul>
                                  <li class="dropdown-header">Electricité</li>
                                  <li>
                                    <a className="catego" href="/">
                                      Alternateur
                                    </a>
                                  </li>
                                  <li>
                                    <a className="catego" href="/">
                                      boites a fusibles
                                    </a>
                                  </li>
                                  <li>
                                    <a className="catego" href="/">
                                      Optique
                                    </a>
                                  </li>
                                  <hr style={{ width: 210 }} />
                                  <li class="dropdown-header">Transmission </li>
                                  <li>
                                    <a className="catego" href="/">
                                      embrayage{" "}
                                    </a>
                                  </li>
                                  <li>
                                    <a className="catego" href="/">
                                      Porte huile
                                    </a>
                                  </li>
                                  <li>
                                    <a className="catego" href="/">
                                      Cardan
                                    </a>
                                  </li>
                                </ul>
                              </li>

                              <li class="col-sm-4">
                                <ul>
                                  <li class="dropdown-header">
                                    Suspension et direction{" "}
                                  </li>
                                  <li>
                                    <a className="catego" href="/">
                                      Amortisseur
                                    </a>
                                  </li>
                                  <li>
                                    <a className="catego" href="/">
                                      Rotule de direction
                                    </a>
                                  </li>
                                  <li>
                                    <a className="catego" href="/">
                                      Triangle / bras de suspension
                                    </a>
                                  </li>
                                  <li>
                                    <a className="catego" href="/">
                                      Châssis
                                    </a>
                                  </li>
                                  <hr style={{ width: 210 }} />
                                  <li class="dropdown-header">
                                    Equipement intèrieur
                                  </li>
                                  <li>
                                    <a className="catego" href="/">
                                      Poignée de porte
                                    </a>
                                  </li>
                                  <li>
                                    <a className="catego" href="/">
                                      Pare soleil
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </div>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/********************************************* */}
                  <li class="nav-item">
                    <a href="/listp" class="nav-link">
                      Nos articles
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="about" class="nav-link">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="contact" class="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
    } else {
      return (
        <div>
          <div class="wrap">
            <div class="container">
              <div class="row justify-content-between">
                <div class="col-md-3 d-flex align-items-center">
                  <a class="navbar-brand" href="/home">
                    Sayaratna<span>.</span>TN
                  </a>
                </div>
                <div class="col-md-8">
                  <div class="row">
                    <div class="col">
                      <div class="top-wrap d-flex pr-6">
                        <div class="icon d-flex align-items-center justify-content-center">
                          <span class="fa fa-location-arrow"></span>
                        </div>
                        <div class="text">
                          <span style={{ color: "white" }}>Email</span>
                          <span>kia.monastir@gmail.com</span>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="top-wrap d-flex">
                        <div class="icon d-flex align-items-center justify-content-center">
                          <span class="fa fa-location-arrow"></span>
                        </div>
                        <div class="text">
                          <span style={{ color: "white" }}>Appeler nous</span>
                          <span> +216 73 531 139</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md d-flex justify-content-end align-items-center">
                      <div class="social-media col-md-9">
                        <p class="mb-0 d-flex" style={{ color: "white" }}>
                          <a
                            href="/logout"
                            class="d-flex align-items-center justify-content-center pl-3"
                            onClick={this.signOut}
                          >
                            {" "}
                            <span class=" pr-3 ti-user" aria-hidden="true">
                              <i class="sr-only"></i>
                            </span>{" "}
                          </a>
                          Déconnexion
                        </p>
                      </div>
                      <div class="social-media col-md-5">
                        <p class="mb-0 d-flex" style={{ color: "white" }}>
                          <a
                            href="panier"
                            class="d-flex align-items-center justify-content-center pl-3 "
                          >
                            <span class=" pr-3 ti-shopping-cart ">
                              <i class="sr-only "></i>
                            </span>
                          </a>
                          Mon Panier
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav
            class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
            id="ftco-navbar"
          >
            <div class="container">
              <button
                class="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#ftco-nav"
                aria-controls="ftco-nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars"></i>Menu
              </button>

              <form action="#" class="searchform order-lg-last">
                <div class="form-group d-flex">
                  <input
                    type="text"
                    class="form-control pl-3"
                    placeholder="Search"
                  />
                  <button
                    type="submit"
                    placeholder=""
                    class="form-control search"
                  >
                    <span class="fa fa-search"></span>
                  </button>
                </div>
              </form>

              <div class="collapse navbar-collapse" id="ftco-nav">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a href="/home" class="nav-link">
                      Home
                    </a>
                  </li>

                  <li class="nav-item">
                    <div class="collapse navbar-collapse js-navbar-collapse">
                      <ul class="nav navbar-nav ">
                        <li class="dropdown mega-dropdown nav-item">
                          <a
                            href="/"
                            class="dropdown-toggle nav-link"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Collection{" "}
                          </a>

                          <ul class="dropdown-menu mega-dropdown-menu row  ">
                            <div className="row">
                              <ul class="col-sm-4 pl-5">
                                <li class="dropdown-header">Consommables</li>
                                <li>
                                  <a className="catego" href="/">
                                    Filtres
                                  </a>
                                </li>
                                <li>
                                  <a className="catego" href="/">
                                    Freinage
                                  </a>
                                </li>
                                <li>
                                  <a className="catego" href="/">
                                    Bougies
                                  </a>
                                </li>
                                <li>
                                  <a className="catego" href="/">
                                    Courroie
                                  </a>
                                </li>
                                <hr style={{ width: 210 }} />
                                <li class="dropdown-header">
                                  Tolerie et vitrage
                                </li>
                                <li>
                                  <a className="catego" href="/">
                                    {" "}
                                    Port Capot
                                  </a>
                                </li>
                                <li>
                                  <a className="catego" href="/">
                                    {" "}
                                    Pare choc{" "}
                                  </a>
                                </li>
                              </ul>

                              <li class="col-sm-4">
                                <ul>
                                  <li class="dropdown-header">Electricité</li>
                                  <li>
                                    <a className="catego" href="/">
                                      Alternateur
                                    </a>
                                  </li>
                                  <li>
                                    <a className="catego" href="/">
                                      boites a fusibles
                                    </a>
                                  </li>
                                  <li>
                                    <a className="catego" href="/">
                                      Optique
                                    </a>
                                  </li>
                                  <hr style={{ width: 210 }} />
                                  <li class="dropdown-header">Transmission </li>
                                  <li>
                                    <a className="catego" href="/">
                                      embrayage{" "}
                                    </a>
                                  </li>
                                  <li>
                                    <a className="catego" href="/">
                                      Porte huile
                                    </a>
                                  </li>
                                  <li>
                                    <a className="catego" href="/">
                                      Cardan
                                    </a>
                                  </li>
                                </ul>
                              </li>

                              <li class="col-sm-4">
                                <ul>
                                  <li class="dropdown-header">
                                    Suspension et direction{" "}
                                  </li>
                                  <li>
                                    <a className="catego" href="/">
                                      Amortisseur
                                    </a>
                                  </li>
                                  <li>
                                    <a className="catego" href="/">
                                      Rotule de direction
                                    </a>
                                  </li>
                                  <li>
                                    <a className="catego" href="/">
                                      Triangle / bras de suspension
                                    </a>
                                  </li>
                                  <li>
                                    <a className="catego" href="/">
                                      Châssis
                                    </a>
                                  </li>
                                  <hr style={{ width: 210 }} />
                                  <li class="dropdown-header">
                                    Equipement intèrieur
                                  </li>
                                  <li>
                                    <a className="catego" href="/">
                                      Poignée de porte
                                    </a>
                                  </li>
                                  <li>
                                    <a className="catego" href="/">
                                      Pare soleil
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </div>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/********************************************* */}
                  <li class="nav-item">
                    <a href="/listp" class="nav-link">
                      Nos articles
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="about" class="nav-link">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="contact" class="nav-link">
                      Contact
                    </a>
                  </li>
                  {mycompte}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  }
}
function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
  };
}

export default connect(mapStateToProps, actions)(nav);
