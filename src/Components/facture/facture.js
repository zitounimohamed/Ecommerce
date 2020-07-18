import React, { Component,useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { connect} from 'react-redux';
import {compose} from 'redux';
import * as actions from '../../actions/index'

import './facture.css'
import Axios from 'axios';
class Facture extends Component {
	constructor(props){
		super(props);	
		this.state={
			facture : '',
			order : [],
			shipping : {}
		};
		
	}
	

    render() {

        return (
            <div class="container">
    <div class="row mt-5">
        <div class="col-sm-12">
    		<div class="invoice-title">
    			<h2>Bon de Commande</h2><h3 class="pull-right">Reférence : </h3>
    		</div>
    		<hr id='facthr'/>
    		<div class="row">
    			<div class="col-sm-6">
    				<address>
    				<strong>Facturé à : </strong>
    					{}<br/>
                        <div>
                            <strong>Adresse : </strong>
                        </div>
    					
    				</address>
    			</div>
    			<div class="col-sm-6 text-right">
    				<address>
        			<strong>Expédié à : </strong>
    					Hmida Imen<br/>
                        <div>
                        <strong>Adresse : </strong>
                        </div>
    					
    				</address>
    			</div>
    		</div>
    		<div class="row">
    			<div class="col-sm-6">
    				<address>
    					<strong>Méthode de payment:</strong><br/>
    					Livraison à domicile<br/>
    				</address>
    			</div>
    			<div class="col-sm-6 text-right">
    				<address>
    					<strong>Date de Livraison:</strong><br/>
    					Juillet 27, 2020
    				</address>
    			</div>
    		</div>
    	</div>
    </div>
    
    <div class="row">
    	<div class="col-md-12">
    		<div class="panel panel-default">
    			<div class="panel-heading">
    				<h3 class="panel-title"><strong>Récapitulatif de la commande</strong></h3>
    			</div>
    			<div class="panel-body">
    				<div class="table-responsive">
    					<table class="table table-condensed">
    						<thead>
                                <tr>
        							<td><strong>Item</strong></td>
        							<td class="text-center"><strong>Prix</strong></td>
        							<td class="text-center"><strong>Quantité</strong></td>
        							<td class="text-right"><strong>Totales</strong></td>
                                </tr>
    						</thead>
    						<tbody>
    							<tr>
    								<td>BS-200</td>
    								<td class="text-center">$10.99</td>
    								<td class="text-center">1</td>
    								<td class="text-right">$10.99</td>
    							</tr>
                                <tr>
        							<td>BS-400</td>
    								<td class="text-center">$20.00</td>
    								<td class="text-center">3</td>
    								<td class="text-right">$60.00</td>
    							</tr>
                                <tr>
            						<td>BS-1000</td>
    								<td class="text-center">$600.00</td>
    								<td class="text-center">1</td>
    								<td class="text-right">$600.00</td>
    							</tr>
    							<tr>
    								<td class="thick-line"></td>
    								<td class="thick-line"></td>
    								<td class="thick-line text-center"><strong>Subtotal</strong></td>
    								<td class="thick-line text-right">$670.99</td>
    							</tr>
    							<tr>
    								<td class="no-line"></td>
    								<td class="no-line"></td>
    								<td class="no-line text-center"><strong>Shipping</strong></td>
    								<td class="no-line text-right">$15</td>
    							</tr>
    							<tr>
    								<td class="no-line"></td>
    								<td class="no-line"></td>
    								<td class="no-line text-center"><strong>Total</strong></td>
    								<td class="no-line text-right">$685.99</td>
    							</tr>
    						</tbody>
    					</table>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
    
</div>

        );
    }
}
const Example = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
   
    return (
      <div>
        <Facture ref={componentRef} />
        <center><button className='btn btn-secondary ' onClick={handlePrint}>Imprimer</button></center>
      </div>
    );
  };
  export default compose(
    connect(null,actions),
            )(Example)