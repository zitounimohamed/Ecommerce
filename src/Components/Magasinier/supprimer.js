import React, { Component } from 'react';

class supprimer extends Component {

        


    render() {
        return (
            <div>
            <br/><br/><br/><br/>
                <figure className='figpiece'><h1>Supprimer une pièce </h1></figure>
            <div class='container '>
                <form onSubmit={this.handelSubmit}>
                <div class ='row '>
                    <div class='col'>
                    <div class='form-group '>
                                    <label for="exampleFormControlFile1">La Réference du piece : </label>
                                    <input class="form-control" type="nom" placeholder="Default input" name='ref'  onChange={this.handleInputChange}></input>
                    </div>
			            	</div>
                    <div class='col'>
                    <div class='form-group '>
                                    <label for="exampleFormControlFile1">Le nom du piece: </label>
                                    <input class="form-control" type="prix" placeholder="Default input" name='nom'  onChange={this.handleInputChange}></input>
                            </div>
                    </div>
			        	</div>
			          </form>
            </div>
          </div>
        );
    }
}

export default supprimer;