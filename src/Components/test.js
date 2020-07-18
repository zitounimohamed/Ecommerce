import React, { Component } from "react";
import ListP from "../views/listp";
import {Link} from 'react-router-dom'
import axios from "axios";

class test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      piece: [],
    };
  }

  getsearch() {
    const categ = this.props.match.params.categ;
    const modele = this.props.match.params.modele;
    const marque = this.props.match.params.marque;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };
    axios
      .post("http://localhost:5000/piece/allpiece", {
        categ: categ,
        modele: modele,
        marque: marque,
      })
      .then((result) =>
        this.setState({
          piece: result.data,
        })
      )
      .catch((error) => console.log("error", error));
  }
  async componentDidMount (){
    await this.getsearch()
  }

  render() {
    return (
      <div>
        {this.state.piece !== null &&
          this.state.piece.map((piece) => {
            return (
              <div >                   
                            <div class="container" style={{marginTop : 30}}>
                            <div className="container">
                                <div class=" card flex-md-row mb-4 shadow-sm h-md-250">
                                    <div class="card-body d-flex flex-column align-items-start">
                                    <strong class="d-inline-block mb-2 text-primary">{piece.nom}</strong>
                                    <h6 class="mb-0">
                                        <a class="text-dark" href="#">{piece.categ}</a>
                                    </h6>
                                    <div class="mb-1 text-muted small">{piece.ref}</div>
                                    <p class="card-text mb-auto">Prix : {piece.prix}</p>
                                    <p class="card-text mb-auto">Désignation : {piece.desig}</p>
                                    <Link to ={`/product_page/${piece._id}`}className="btn btn-outline-primary btn-sm"><i class="ti-bag pr-2"></i>Plus Détails</Link>  </div>
                                    <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]"  src={`http://localhost:5000/${piece.file}`} style={{width: 200 , height: 250}}/>
                                </div>
                            </div>
        </div>  
                          </div> 
            );
          })}
      </div>
    );
  }
}

export default test;
