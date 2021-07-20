import React, { Component } from "react";
import heads from "./heads.jpg";
import tails from "./tails.jpg";
import "./Coin.css";

class Coin extends Component {
  render() {
    return (
      <div className="Coin">
        <img src={heads} />
      </div>
    );
  }
}

export default Coin;
