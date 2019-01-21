import React, { Component } from "react";
import Link from "next/link";
import "components/Card/Card.scss";

class Card extends Component {

  render() {
    return (
      <div class="wrapper">
        <div class="container">
          <div class="top">
            <img src={ this.props.image } />
          </div>
          <div class="bottom">
            <div class="left">
              <div class="details">
                <h1>{ this.props.item_name }</h1>
                <p>{ this.props.preco }</p>
              </div>
              <div class="buy">Adicionar</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
