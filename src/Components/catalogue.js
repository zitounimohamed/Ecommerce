import React, { Component } from 'react';
class catalog extends Component {

    render() {
        return (
            <div>
            <div class="bf-catalogue">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h2 class="title">
                                <span>Nos pièces détachées auto</span>
                                </h2></div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="catalogue-bloc">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <ul class="nav nav-tabs">
                                                <li class="nav-item">
                                                <a class="nav-link active" id="trigger-catalogue-pieces" data-toggle="tab" href="/bloc-catalogue-pieces">Toutes les pièces auto</a></li>
                                                    <li class="nav-item"><a class="nav-link" >Accessoires et Equipements</a></li>
                                                    <li class="nav-item"><a class="nav-link">Entretien et Nettoyage</a></li>
                                                    <li class="nav-item"><a class="nav-link">Promo</a></li>
                                            </ul>
                                                    <div class="tab-content">
    </div></div></div></div></div></div></div></div></div>
        );
    }
}

export default catalog;