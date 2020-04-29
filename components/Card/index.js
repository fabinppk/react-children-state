import React, { Component } from "react";
import "components/Card/Card.scss";

class Card extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="top">
            <img src={this.props.image} />
          </div>
          <div className="bottom">
            <div className="left">
              <div className="details">
                <h1>{this.props.item_name}</h1>
                <p>{this.props.preco}</p>
              </div>
              <div className="buy">Adicionar</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
