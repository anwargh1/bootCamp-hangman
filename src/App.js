import React, { Component } from "react";
import "./App.css";
import EndGame from "./components/EndGame";
import Letters from "./components/Letters";
import Fullupletters from "./components/Letters";
import Score from "./components/Score";
import Solution from "./components/Solution";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      endGame: null,
      score: 100,
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: "ELEPHENT",
        hint: "Animal : he has a long nose",
      },
    };
  }
  generateLetterStatuses() {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }

  selectLetter = (letter) => {
    let currentLetterStatus = this.state.letterStatus;
    currentLetterStatus[letter] = true;
    this.setState(
      {
        letterStatus: currentLetterStatus,
        score: this.state.solution.word.includes(letter)
          ? this.state.score + 5
          : this.state.score - 20,
      },
      function () {
        if (this.state.score <= 0) {
          this.setState({
            endGame: false,
          });
        } else {
          let count = 0;
          this.state.solution.word.split("").forEach((w) => {
            if (this.state.letterStatus[w] === true) {
              count++;
            }
          });
          if (count === this.state.solution.word.length) {
            this.setState({
              endGame: true,
            });
          }
        }
      }
    );
  };

  reStartGame = () => {
    this.setState({
      endGame: null,
      score: 100,
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: "MIRROR",
        hint: "something you see yourself on",
      },
    });
  };
  render() {
    return (
      <div>
        {this.state.endGame === null ? (
          <div>
            <Score score={this.state.score} />
            <Solution
              letterStatus={this.state.letterStatus}
              solution={this.state.solution}
            />
            <Letters
              letterStatus={this.state.letterStatus}
              selectLetter={this.selectLetter}
            />
          </div>
        ) : (
          <EndGame
            endGame={this.state.endGame}
            word={this.state.solution.word}
            reStartGame={this.reStartGame}
          />
        )}
      </div>
    );
  }
}

export default App;
