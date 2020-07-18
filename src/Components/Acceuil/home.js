import React, { Component } from 'react';
import kiaRIO3 from '../img/Rio3.jpg';
import kiaRIO4 from '../img/Rio4.jpg';
import Picanto3 from '../img/Picanto3.jpg';
import Picanto4 from '../img/Picanto4.jpg';
import Sportage3 from '../img/Sportage3.jpg';
import Sportage4 from '../img/Sportage4.jpg';
import Grand_i10_4 from '../img/Grand_i10_4.jpeg';
import Grand_i10 from '../img/Grand-i10.jpg';
import Hyundai_i20_3 from '../img/Hyundai_i20_3.jpg';
import Hyundai_i20_4 from '../img/Hyundai_i20_4.jpg';
import kiaMotor from '../img/kia.jpg';
import Hyundai from '../img/Hyundai.jpg';

import './home.css'
import Background from './backgr.js';
import AboutHome from './about';
import AllPieces from './card';


class Home extends Component {

    render() {
        return (
       <div>

<Background />
<br></br><br></br>
{/*<img src={reworked} class='image' alt='fr2'/> <br></br><br></br>*/}



<div class="quick-overview bg-secondary text-black py-3">
<div class="container">
	<div class="row ">
	    <div class="col-md-3  border">
	        <div class="card-body">
	            <i class="fa fa-money fa-4x pl-5" style ={{color : 'green'}}></i>
	            <h4>Meilleur Prix</h4>
	             <p class="perf">Nous garantit des prix attractifs et des pneus auto d'excellente qualité</p>
	          
	        </div>
	    </div>
	    <div class="col-md-3 border ">
	        <div class="card-body">
	            <i class="fa fa-truck fa-4x pl-5" style ={{color : 'green'}}></i>
	            <h4>Frais de livraison</h4><br />
                <p class="perf">chez vous ou en point relais</p>
	          
	        </div>
	    </div>
	    <div class="col-md-3 border">
	        <div class="card-body">
	            <i class="fa fa-shopping-cart fa-4x pl-5" style ={{color : 'green'}}></i>
	            <h4>Une Large Gamme</h4>
                <p class="perf">Première qualité, et des milliers de piéces de toutes tailles sont disponibles</p>
	         </div>
	    </div>
	    <div class="col-md-3 border ">
	        <div class="card-body">
	            <i class="fa fa-shield fa-4x pl-5 " style ={{color : 'green'}} ></i>
	            <h4>PAIEMENT SÉCURISÉ</h4>
	        </div>
	    </div>
	</div>	
</div>
</div>
<br/>
<AboutHome/> <br/><br/>
<AllPieces/>



 {/******************************kia***********************************
 <br/><br /><br/><br /><br/><br />

 <div class="container" >
   <h2 class="tit">Choisissez votre voiture  </h2>
</div>
 <br/>

<div class="container" >
   <div class="row blog">
      <h1>
        <div class="animated fadeInLeft">KIA</div>
        <div class="animated " >Motors </div> 
        <img alt="" src={kiaMotor} class="img-responsive right-block" alt="kia" height="15%" width="15%" align ="left" />
      </h1>
   <div class="col-md-12"><br/>
      <div id="blogCarousel" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#blogCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#blogCarousel" data-slide-to="1"></li>                      
          </ol>  
<div class="carousel-inner">
  <div class="carousel-item active">
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="our-team">
          <div class="pic">
          <img alt='' src={kiaRIO3} />
          </div>
          <div class="team-content">
            <h3 class="title">Rio 3 </h3>
          </div>
          <ul class="social"> 
            <li>
            <a href="/" class="fa fa-envelope">plus</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="our-team">
          <div class="pic">
            <img alt='' src={kiaRIO4}/>
          </div>
          <div class="team-content">
            <h3 class="title">Rio 4 </h3>
          </div>
          <ul class="social">
            <li>
              <a href="/" class="fa fa-envelope">plus</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="our-team">
          <div class="pic">
            <img alt='' src={Picanto3}/>
          </div>
          <div class="team-content">
            <h3 class="title">Picanto 3</h3>
          </div>
          <ul class="social">
            <li>
              <a href="/" class="fa fa-envelope">plus</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="our-team">
          <div class="pic">
            <img alt='' src={Picanto4}/>
          </div>
          <div class="team-content">
            <h3 class="title">Picanto 4</h3>
          </div>
          <ul class="social">
            <li>
              <a href="/" class="fa fa-envelope">plus</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
 </div>
 <div class="carousel-item">
   <div class="row">
     <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="our-team">
          <div class="pic">
            <img alt='' src={Sportage3}/>
          </div>
          <div class="team-content">
            <h3 class="title">Sportage 3</h3>
          </div>
          <ul class="social"> 
            <li>
              <a href="/" class="fa fa-envelope">plus</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="our-team">
          <div class="pic">
            <img alt='' src={Sportage4}/>
          </div>
          <div class="team-content">
            <h3 class="title">Sportage 4</h3>
          </div>
          <ul class="social">
            <li>
              <a href="/" class="fa fa-envelope">plus</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
   </div>
  </div>
  </div>
   </div>
  </div>
</div>

{/********************************HYUNDAI**************************** 
<br/><br/><br/><br/>
<div class="container">
   <div class="row blog">
      <h1 class="hyun">
        <div class="animated fadeInLeft">HYUNDAI</div><div class="animated " >Motors </div> <img src={Hyundai} class="img-responsive right-block" alt="kia" height="10%" width="10%" align ="left" />
      </h1>
        <div data-target="#blogCarousel" data-slide-to="0" class="active"></div>
          
<div class="carousel-inner">
  <div class="carousel-item active">
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="our-team">
          <div class="pic">
          <img alt='' src={Grand_i10} />
          </div>
          <div class="team-content">
            <h3 class="title">Grand I10_3</h3>
          </div>
          <ul class="social"> 
            <li>
              <a href="/" class="fa fa-envelope">plus</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="our-team">
          <div class="pic">
            <img alt='' src={Grand_i10_4}/>
          </div>
          <div class="team-content">
            <h3 class="title">Grand_i10_4</h3>
          </div>
          <ul class="social">
            <li>
              <a href="/" class="fa fa-envelope">plus</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="our-team">
          <div class="pic">
            <img alt='' src={Hyundai_i20_3}/>
          </div>
          <div class="team-content">
            <h3 class="title">Grand_i20_3</h3>
          </div>
          <ul class="social">
            <li>
              <a href="/" class="fa fa-envelope">plus</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="our-team">
          <div class="pic">
            <img alt='' src={Hyundai_i20_4}/>
          </div>
          <div class="team-content">
            <h3 class="title">Grand_i20_4</h3>
          </div>
          <ul class="social">
            <li>
              <a href="/" class="fa fa-envelope">plus</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
 </div>

    </div>
   </div>
  </div>
  
 <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>

{/*************************************************** */}


</div>

);
    }
}

export default Home;

