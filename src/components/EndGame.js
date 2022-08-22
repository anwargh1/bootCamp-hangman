import React, { Component } from "react";

class EndGame extends Component {
  render() {
    return (
      <div>
        {this.props.endGame ? (
          <p>Congratulations</p>
        ) : (
          <p>Alas ,the word was {this.props.word}</p>
        )}
        <button onClick={this.props.reStartGame}>Restart</button>
      </div>
    );
  }
}
export default EndGame;
