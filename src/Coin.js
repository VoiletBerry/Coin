import React, { Component } from "react";
import "./Coin.css";
class Coin extends Component {
  render() {
    return (
      <div className="coin">
        <img
          className="img"
          src={this.props.info.imgSrc}
          alt={this.props.info.side}
        ></img>
      </div>
    );
  }
}

export default Coin;
