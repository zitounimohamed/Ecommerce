import React, { Component } from 'react';
import './category.css';
import {Link} from 'react-router-dom'
import ImageSlider from './utils/ImageSlider';

class Category extends Component {

    render() {
        return (
  <div>        
    <section class="category-section spad">
<div class="container"> 
<div class="row">
<div class="col-lg-4 col-sm-6">
<div class="product-item">
<div class="pi-pic">
<div class="tag-sale">ON SALE</div>
<ImageSlider class="product-big-img" file={this.props.file}/>
<div class="pi-links">
<a href="#" class="add-card"><i class="ti-bag"></i><span>ADD TO CART</span></a>
<Link to ={`/product_page/${this.props._id}`} class="wishlist-btn"><i class="ti-eye"></i></Link>
</div>
</div>
<div class="pi-text">
<h6>{this.props.prix}</h6>
<p><Link to ={`/product_page/${this.props._id}`}>{this.props.nom}</Link></p>
</div>
</div>
</div>


</div>
</div>
</section>

</div>  
        );
    }
}

export default Category;