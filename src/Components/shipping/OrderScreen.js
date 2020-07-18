import React, { useRef, Component } from 'react';
import Axios from 'axios';
import { useReactToPrint } from 'react-to-print';


class OrderScreen extends Component {
  constructor(props){
    super(props);
    this.state={
     		facture : '',
			order : [],
			shipping : ''
    }
  }
    componentDidMount(){
      const {id} = this.props.match.params;
      console.log('id',id);
      Axios.get(`http://localhost:5000/orders/${id}`).
      then((response)=>{
        if( response!= null ){
				
          this.setState({
            facture : response.data,
            shipping : response.data.shipping,
            order : response.data.orderItems
          })}
      })
      
	}
	
	
render(){
  console.log(this.state.facture);
  const shippingPrice = this.state.facture.itemsPrice > 100 ? 0 : 7; // ken akber mn 100 blech sinon b 7dt el livraison 
  
 
  return (

    <div class="container">
    <div class="row mt-5">
        <div class="col-sm-12">
    		<div class="invoice-title">
    			<h2>Bon de Commande</h2><h3 class="pull-right">Reférence : {this.state.facture._id}</h3>
    		</div>
    		<hr id='facthr'/>
    		<div class="row">
    			<div class="col-sm-6">
    				<address>
    				<strong>Facturé à : </strong>
    					{this.state.shipping.nom}<br/>
                        <div>
                            <strong>Adresse : </strong>
                            {this.state.shipping.address} <br/>
                            {this.state.shipping.city} {this.state.shipping.postalCode}
                        </div>
    					
    				</address>
    			</div>
    			<div class="col-sm-6 text-right">
    				<address>
    					<strong>Date de Livraison:</strong><br/>
    							Maximum aprés 7 jours.
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
    				
    			</div>
    		</div>
    	</div>
    </div>
    
    <div class="row " >
    	<div class="col-md-12 pt-5" >
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
                  {this.state.order.map(order=>(<tr key={order._id}>
                    <td>{order.nom}</td>
                  <td class="text-center">{order.prix} TND</td>
                  <td class="text-center">{order.qty}</td>
    								<td class="text-right">{this.state.facture.itemsPrice} TND</td>
    							</tr>))}
								<tr>
    								<td class="thick-line"></td>
    								<td class="thick-line"></td>
    								<td class="thick-line text-center"><strong>Subtotal</strong></td>
				  					<td class="thick-line text-right">{this.state.facture.itemsPrice} TND</td>
    							</tr>
    							<tr>
    								<td class="no-line"></td>
    								<td class="no-line"></td>
    								<td class="no-line text-center"><strong>Shipping</strong></td>
				  					<td class="no-line text-right">{shippingPrice} TND</td>
    							</tr>
    							<tr>
    								<td class="no-line"></td>
    								<td class="no-line"></td>
    								<td class="no-line text-center"><strong>Total</strong></td>
    								<td class="no-line text-right">{this.state.facture.totalPrice} TND</td>
    							</tr>
    						</tbody>
    					</table>
							
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
</div>

  )
  
}

}

export default OrderScreen;