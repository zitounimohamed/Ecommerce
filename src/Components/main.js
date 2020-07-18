import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import isClient from './HOCs/ClientGuard';
import isMagasinier from './HOCs/MagaGuard';
import isAdmin from './HOCs/adminGuard';

//what's inside components
import test from './test';
import about from "./about";
import Contact from "./contact";
import catalog from "./catalogue";
import Category from "./category";
import cartscreen from "./cartscreen";
import product_aff from "./product_page";
import mdpOublier from "./conexion/mdpOublier";
import changerMDP from "./conexion/changerMDP";

//acceuil
import Home from "./Acceuil/home";
//admin
import ajout from "./Admin/ajoutpiece";
import update from "./Admin/updatepiec";
import gerer from "./Admin/gerercompte";
import admin from "./Admin/admin";
import dashboard from './Admin/dashboard';
import pieceScreen from './Admin/product';
import Profilepage from './Admin/profile';
import Commandes from './Admin/commande';
import UpdateCompte from './Admin/updatecompte'
import Facture from './Admin/adminFacture'
import ajoutTrans from './Admin/ajoutTrans';

//magasinier 
import magasinier from './Magasinier/magasinier';
import ajoutM from "./Magasinier/ajoutpiece";
import updateM from "./Magasinier/updatepiec";
import dashboardM from './Magasinier/dashboardM';
import pieceScreenM from './Magasinier/product';
import ProfilepageM from './Magasinier/profile';
import CommandeM from './Magasinier/commande.js'

//transporteur
import profileTrans from './transporteur/profile';

//client
import Inscription from "./client/inscrit";
import SignIN from "./client/signin";
import LandingPage from './LandingPage/LandingPage';
import Connexion from "./connexion";
import profile from  "./client/profile";

//
import P from '../views/p';
import affiche from "../views/listp";
import authGard from './HOCs/authGuard'

//shipping 
import ShippingScreen from './shipping/shippingscreen';
import PaymentScreen from './shipping/payment';
import  PlaceOrderScreen from './shipping/PlaceOrder'
import Search from './Search/Search/search';
import Cartscreen from "./cartscreen";
import OrderScreen from './shipping/OrderScreen';
import Example from './facture/facture';

// removed the provider from here and added it in the index file so all the app have access to the store

const Main = () => (
  <BrowserRouter>
    <Switch>

      <Route exact path="/" component={Home} />
      <Route path="/inscrit" component={Inscription} />
      <Route path="/contact" component={Contact} />
      <Route path="/home" component={Home} />
      <Route path="/profilec" component={isClient(profile)} />
      <Route path="/signin" component={SignIN} />
      <Route path="/cartscreen/:id?" component={isClient(Cartscreen)} />
      <Route path="/about" component={about} />
      <Route path="/updatepiec/:id" component={isAdmin(update)} />
      <Route path="/ajoutpiece" component={isAdmin(ajout)} />
      <Route path="/gerercompte" component={isAdmin(gerer)} />
      <Route path="/product_page/:id" component={product_aff} />
      <Route path="/connexion" component={Connexion} />
      <Route path="/admin" component={isAdmin(admin)} />
      <Route path="/listp" component={affiche} />
      <Route path="/dashboard" component={isAdmin(dashboard)}/>
      <Route path="/LandingPage" component={LandingPage}/>
      <Route path="/dashboardM" component={isMagasinier(dashboardM)}/>
      <Route path="/ajoutpiecem" component={isMagasinier(ajoutM)}/>
      <Route path="/updatepiecm" component={isMagasinier(updateM)}/>
      <Route path="/productm" component={isMagasinier(pieceScreenM)}/>
      <Route path="/profilem" component={isMagasinier(ProfilepageM)}/>
      <Route path="/search" component={Search}/>
      <Route path="/product" component={isAdmin(pieceScreen)}/>
      <Route path="/updatecompte" component={isAdmin(UpdateCompte)}/>
      <Route path="/shippingscreen" component={isClient(ShippingScreen)}/>
      <Route path="/payment" component={isClient(PaymentScreen)}/>
      <Route path="/PlaceOrder" component={isClient(PlaceOrderScreen)}/> 
      <Route path="/profile" component={isAdmin(Profilepage)}/>
      <Route path="/OrderScreen/:id" component={isClient(OrderScreen)}/>  
      <Route  path="/facture" component={isClient(Example)}/> 
      <Route  path="/commande" component={isAdmin(Commandes)}/> 
      <Route path="/changerMDP" component={changerMDP} />
      <Route path="/mdpOublier" component={mdpOublier} />
      <Route path="/CommandeM" component={isMagasinier(CommandeM)} />
      <Route path="/magasinier" component={isMagasinier(magasinier)} />
      <Route path="/test/:marque/:modele/:categ" component={test}/>
      <Route path="/factAdmin/:id" component={isAdmin(Facture)}/>
      <Route path='/ajoutTrans' component={ajoutTrans}/>
      <Route path='/profileT' component={profileTrans}/>
    </Switch>
  </BrowserRouter>
);
export default Main;