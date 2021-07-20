import React, { Component } from "react";
import Coin from "./Coin";

class CoinDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      face: null,
      flips: 0,
      headCount: 0,
      tailsCount: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    this.setState({ face: randomNum % 2 === 0 });
    return randomNum % 2 === 0;
  }

  increaseCounters(flipResult) {
    this.setState((st) => ({ flips: st.flips + 1 }));
    flipResult
      ? this.setState((st) => ({ tailsCount: st.tailsCount + 1 }))
      : this.setState((st) => ({ headCount: st.headCount + 1 }));
  }

  handleClick() {
    const flipResult = this.flipCoin();
    this.increaseCounters(flipResult);
  }

  render() {
    return (
      <div className="CoinDisplay">
        <h1>Let's flip a coin!</h1>
        <Coin face={this.state.face} />
        <button onClick={this.handleClick}>Flip Me!</button>
        <p>
          Out of {this.state.flips} flips, there have been{" "}
          {this.state.headCount} heads and {this.state.tailsCount} tails.
        </p>
      </div>
    );
  }
}

export default CoinDisplay;
