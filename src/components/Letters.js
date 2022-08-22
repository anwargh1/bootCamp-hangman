import React, { Component } from "react";
import Letter from "./Letter";

class Letters extends Component {
  render() {
    return (
      <div>
        <div>Available letters </div>
        {Object.keys(this.props.letterStatus).map((l, index) => (
          <Letter
            key={index}
            letter={l}
            showClass={this.props.letterStatus[l]}
            selectLetter={this.props.selectLetter}
          />
        ))}
      </div>
    );
  }
}
export default Letters;
