import React, { Component } from "react";

class Letter extends Component {
  selectLetter = () => {
    this.props.selectLetter(this.props.letter);
  };
  render() {
    return (
      <span
        className={this.props.showClass ? "selected" : ""}
        onClick={this.selectLetter}
      >
        {this.props.isFalse ? "_ " : this.props.letter}{" "}
      </span>
    );
  }
}
export default Letter;
