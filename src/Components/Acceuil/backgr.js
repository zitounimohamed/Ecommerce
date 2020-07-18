import React, { Component } from 'react';
import './home.css';
import axios from 'axios';
import img1 from '../img/image1.png';
const mystyles ={
    backgroundImage: `url(${img1})`,
    height : '80vh',
    backgroundSize : 'cover' 
}
class background extends Component {
    constructor(props) {
		super(props);
		this.state = {
			piece: [],
			marque: '',
			modele : '',
			categ : ''
			  };
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange(e) {
		this.setState({
      [e.target.name] : e.target.value
     
    });
    
    }
    
	
	getsearch = async () => {
       window.location.href = ('/test' +  "/"+ this.state.marque + "/"+this.state.modele+"/"+this.state.categ)
    }
	/*refreshList() {
		this.getData();
		this.setState({
			currentjob: null,
			currentindex: -1
		});
	}*/
    render() {
        console.log(this.state.categ);

        return (
            <section class="search-banner text-white py-3 form-arka-plan" id="search-banner" style={mystyles}>
    <div class="container py-5 my-5">
        <div class="row text-center pb-5">
            <div class="col-md-12">
                <h2 class="text-white siyah-cerceve pb-0">Sayaratna : un large choix de pièces auto pour votre voiture à prix discount</h2>
            </div>
        </div>
        <div class="row card-mid ">
            <div class="col-md-12">
                <div class="card acik-renk-form">
                    <div class="card-body ">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group ">
                                    <select id="iller" value={this.state.modele} name ="modele" class="form-control" onChange={this.handleInputChange}>
                                        <option selected>Choisir la marque</option>
                                        <option value ="kia">KIA</option>
                                        <option value="hyndai">HYUNDAI</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group ">
                                    <select id="ilceler" class="form-control" value={this.state.marque} name ="marque" onChange={this.handleInputChange} >
                                        <option selected>choisir la modèle</option>
                                        <option value="rio">Rio3</option>
                                       <option value="rio4">Rio4</option>
                                         {/*<option>Picanto3</option>
                                        <option>Picanto4</option>
                                        <option>Sportage3</option>
                                        <option>Sportage4</option>
                                        <option>Grand-i10</option>
                                        <option>Grand_i10_4</option>
                                       <option>Hyundai_i20_4</option> */}
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group ">
                                    <select id="arac-turu" value={this.state.categ} class="form-control" name ="categ"  onChange={this.handleInputChange}>
                                        <option selected>Choisir votre categorie</option>
                                        <option value="Transmission">Transmission</option>
                                        <option value="Consommables">Consommables</option>
                                        <option value="Suspension">Suspension - Direction</option>
                                        <option value="Equipement">Equipement interieur </option>
                                        <option value="Electricité">Electricité</option>
                                        <option value="Tolerie">Tolerie et vitrage</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div class="row">
                           
                        <div class="form-group ">
                         <button class="main_bt" type="button" onClick={this.getsearch}>Chercher</button>
                        </div>
                        </div>
                    </div>
                </div>
               {/* <div className="jobs">
							{this.state.piece !== null &&
								this.state.piece.map((piece) => {
									return (
										{/*<ViewJobs
											_id={jobs._id}
											title={jobs.title}
											location={jobs.location}
											type={jobs.type}
											file={jobs.file}
                                        />*
									);
								})}
						</div> */}
            </div>
        </div>
    </div>
</section>

        );
    }
}

export default background;