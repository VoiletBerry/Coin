import React, { Component } from "react";
import Coin from "./Coin";
import "./Board.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      totalFlips: 0,
      noOfHeads: 0,
      noOfTails: 0,
    };
    this.flipCoin = this.flipCoin.bind(this);
  }

  render() {
    return (
      <div className="board">
        <h1>Lets Flip a coin</h1>
        <div>{this.state.currCoin && <Coin info={this.state.currCoin} />}</div>
        <button onClick={this.flipCoin}> Flip ME </button>
        <p>
          Out of {this.state.totalFlips} flips, there have been{" "}
          {this.state.noOfHeads} heads and {this.state.noOfTails} tails
        </p>
      </div>
    );
  }

  flipCoin() {
    const randIndex = Math.floor(Math.random() * this.props.coins.length);
    const newCoin = this.props.coins[randIndex];
    this.setState((st) => {
      return {
        currCoin: newCoin,
        totalFlips: st.totalFlips + 1,
        noOfHeads: st.noOfHeads + (newCoin.side === "heads" ? 1 : 0),
        noOfTails: st.noOfTails + (newCoin.side === "tails" ? 1 : 0),
      };
    });
  }

  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      {
        side: "tails",
        imgSrc:
          "https://media.istockphoto.com/id/476142091/photo/quarter-dollar-us-coin-isolated-on-white.jpg?s=612x612&w=0&k=20&c=wNzr7m0Z3dhlf8_O1G3EFNz8u2tALVobVs4K4XfFN5c=",
      },
    ],
  };
}

export default Board;
