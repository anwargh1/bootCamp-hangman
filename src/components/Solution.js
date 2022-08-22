import React, { Component } from "react";
import Letter from "./Letter";

class Solution extends Component {
  render() {
    return (
      <div>
        {this.props.solution.word.split("").map((w, index) => (
          <Letter
            letter={w}
            key={index}
            isFalse={!this.props.letterStatus[w]}
          />
        ))}
        <div>
          <em>Hint : {this.props.solution.hint}</em>
        </div>
      </div>
    );
  }
}
export default Solution;
