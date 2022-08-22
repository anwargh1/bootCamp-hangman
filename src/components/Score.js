import React, { Component } from "react";

class Score extends Component {
  render() {
    return (
      <div
        className={
          this.props.score >= 80
            ? "highScore"
            : this.props.score >= 50
            ? "mediumScore"
            : "lowScore"
        }
      >
        {this.props.score}{" "}
      </div>
    );
  }
}
export default Score;
