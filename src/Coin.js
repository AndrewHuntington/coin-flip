import React, { Component } from "react";
import heads from "./heads.jpg";
import tails from "./tails.jpg";
import "./Coin.css";

class Coin extends Component {
  renderCoin() {
    if (this.props.face !== null) {
      return this.props.face ? <img src={tails} /> : <img src={heads} />;
    }
  }

  render() {
    return <div className="Coin">{this.renderCoin()}</div>;
  }
}

export default Coin;
