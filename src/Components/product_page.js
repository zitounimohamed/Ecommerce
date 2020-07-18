import React, { Component, useState } from "react";
import kiaRIO4 from "./img/Rio4.jpg";
import "./product_page.css";
import numericInput from "react-numeric-input";
import { connect } from "react-redux";
import { compose, $CombinedState } from "redux";
import axios from "axios";
import * as actions from "../actions/index";
import ImageSlider from "./utils/ImageSlider";

class product_aff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      piece: "",
      qty: 1,
    };
  }
  async componentDidMount() {
    const { id } = this.props.match.params;
    console.log("id", id);

    await axios
      .get(`http://localhost:5000/piece/${id}`)

      .then((response) => {
        if (response.status === 200 && response != null) {
          this.setState({ piece: response.data });
        }
      });
  }

  handleInputChange = (event) => {
    this.setState({
      qty: event.target.value,
    });
  };

  handleAddToCart = () => {
    const { history } = this.props;
    history.push(
      "/cartscreen/" + this.props.match.params.id + "?qty=" + this.state.qty
    );
  };

  delete(id) {
    axios.delete(`http://localhost:5000/piece/${id}`).then((response) => {
      if (response.status === 200 && response != null) {
        this.props.history.push("/listP");
      }
    });
  }

  render() {
    console.log(this.state.piece);

    return (
      <div>
        <section class="product-section">
          <div class="container">
            <div class="back-link">
              <a href="/listP"> &lt;&lt; Back to Category</a>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="product-img">
                  <ImageSlider file={this.state.piece.file} />
                </div>
                {/************************************* */}
              </div>
              <div class="col-lg-6 product-details">
                <h2 class="p-title"> {this.state.piece.nom} </h2>
                <h3 class="p-price">{this.state.piece.prix} DT</h3>
                <h4 class="p-stock">
                  <span> Stock :</span> {this.state.piece.qte} Articles{" "}
                </h4>
                <div class="quantity">
                  <p>Quantity</p>
                  <div className="pro-qt">
                    <input
                      mobile
                      name="qty"
                      min={0}
                      max={100}
                      value={this.state.qty}
                      onChange={this.handleInputChange.bind(this)}
                    />
                  </div>
                </div>
                <button onClick={this.handleAddToCart} class="site-btn">
                  SHOP NOW
                </button>{" "}
                <button
                  class="site-btn"
                  onClick={() => this.delete(this.state.piece._id)}
                >
                  delete
                </button>
                <div id="accordion" class="accordion-area">
                  <div class="panel">
                    <div class="panel-header" id="headingOne">
                      <button
                        class="panel-link active"
                        data-toggle="collapse"
                        data-target="#collapse1"
                        aria-expanded="true"
                        aria-controls="collapse1"
                      >
                        information
                      </button>
                    </div>
                    <div
                      id="collapse1"
                      class="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div class="panel-body">
                        <p class="p-desc">{this.state.piece.desig} </p>
                      </div>
                    </div>
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

export default compose(connect(null, actions))(product_aff);
