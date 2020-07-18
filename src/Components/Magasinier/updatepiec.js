import React, { Component } from 'react';
import axios from 'axios'

class update extends Component {
    constructor(props){
        super(props);
        this.state = {
          pieceone : '' ,
          ref: null,
        desig: null,
        nom: null,
        prix: null,
        qte: null,
        remise: null,
        file: null,
        categ: null,
        modele: null
          }
          this.onChange = this.onChange.bind(this)
    }
    onChange = (event) =>{
        this.setState({
            
            [event.target.name] : event.target.value,
            
        })
    }
       async get(id){
        await axios.get(`http://localhost:5000/piece/${id}`)
        
        .then((response) => {
          if(response.status===200 && response!= null )
          {
            this.setState({pieceone : response.data})
          }
       })
        }
        async componentDidMount(){
            const {id} = this.props.match.params
            this.get(id)
        }
render() {  
        console.log("pieceone" ,this.state.pieceone);
        
    return (
        <div>
            <br/><br/><br/><br/>
                <figure className='figpiece'><h1>Update une pièce </h1></figure>
            <div class='container '>
                <form onSubmit={this.handleSubmit}>
				
                <div class='row'>
                    <div class='col'>
                        <label for="exampleFormControlFile1">Modèle</label>
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" name="modele" value={this.state.pieceone.modele} onChange={this.onChange}>
                            <option selected>Choisir...</option>
                            <option value="kia">Kia</option>
                            <option value="hyundai">Hyundai</option>
                        </select>
                    </div>
                    <div class='col'>
                        <label for="exampleFormControlFile1"> Choix de voiture </label>
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" name="choix"  onChange={this.onChange}>
                            <option selected>Choisir...</option>
							
                        </select>
                    </div>
                </div>
                
                <div class='row'>
                    <div class='col'>
                            <div class='form-group pt-3'>
                                    <label for="exampleFormControlFile1">La Référence</label>
                                    <input class="form-control" type="text" placeholder="Default input" value={this.state.pieceone.ref} name='ref' onChange={this.handleInputChange}></input>
                            </div>
                    </div>

                    <div class='col pt-3'>
                        <label for="exampleFormControlFile1"> La Categorie</label>
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" name="categ" value={this.state.pieceone.categ} onChange={this.handleInputChange}>
                            <option selected>Choisir...</option>
							<option value="Transmission">Transmission  </option>
                            <option value="Consommables">Consommables </option>
                            <option value="Equipement intèrieur">Equipement intèrieur </option>
                            <option value="Suspension et direction">Suspension et direction </option>
                            <option value="Tolerie et vitrage">Tolerie et vitrage </option>
                            <option value="Electricité">Electricité </option>	
                        </select>
                    </div>
                </div>

				<div class='form-group '>
                        <label for="exampleFormControlFile1">Désignation </label>
                        <textarea class="form-control" type="desig" placeholder="Default input" value={this.state.pieceone.desig} name='desig' onChange={this.handleInputChange}></textarea>
                </div>
				<div class ='row '>
				<div class='col'>
				<div class='form-group '>
                        <label for="exampleFormControlFile1">Le nom du piece : </label>
                        <input class="form-control" type="nom" placeholder="Default input" name='nom' value={this.state.pieceone.nom} onChange={this.handleInputChange}></input>
                </div>
				</div>
				<div class='col'>
				<div class='form-group '>
                        <label for="exampleFormControlFile1">La prix du piece : </label>
                        <input class="form-control" type="prix" placeholder="Default input" name='prix' value={this.state.pieceone.prix} onChange={this.handleInputChange}></input>
                </div>
				</div>
				</div>
				<div class='form-group pt-3'>
                        <label for="exampleFormControlFile1"> la quantité du piece : </label>
                        <input class="form-control" type="qte" placeholder="Default input" name='qte' value={this.state.pieceone.qte} onChange={this.handleInputChange}></input>
                </div>

				<div class='form-group '>
                        <label for="exampleFormControlFile1"> Remise : </label>
                        <input class="form-control" type="remise" placeholder="Default input" value={this.state.pieceone.remise} name='remise' onChange={this.handleInputChange}></input>
                </div>

				<div class="form-group ">
                    <label for="exampleFormControlFile1">Example file input</label>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1" name="file" onChange={this.onChange}/>
                </div>

                <div class='row'>
                        <button type='submit' class='btn btn-primary center ' id='but' >Modifier</button>
                </div>
                </form>
            </div>
        </div>
        
    );
}
}
export default update;