import React, { Component } from 'react';
import ViewPiece from '../Components/category';
import axios from 'axios';
import {compose} from 'redux';
import {connect} from 'react-redux'
import {Link} from "react-router-dom"
import ImageSlider from '../Components/utils/ImageSlider'
class affiche extends Component {
    constructor(props){
        super(props)
    this.state={
        piece:null
    }
    }
  async componentDidMount(){
    let url = 'http://localhost:5000/piece/allpiece';
    await axios.get(url).then((response)=>{
        console.log("data",response);
        this.setState({piece:response.data})
    }).catch(error=>{
        console.log(error);
    })
}
render() {
    return (
        <div>
            {this.state.piece !== null && this.state.piece.map(piece=> {
                console.log(piece);
                return(
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
                            )
                    })} 
           </div> 
        );
    }
}


export default compose (
    connect(null))(affiche)