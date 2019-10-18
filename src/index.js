import ReactDOM from "react-dom";
import React, { Component } from "react";
import DogImages from "./DogImages.js";
import AllBreedButtons from "./AllBreedButtons.js";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button"; //Add this line Here
import styles from "./style.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breed: "random"
    };
  }
  setBreed = newBreed => {
    this.setState({ breed: newBreed });
  };

  render() {
    return (
      <div class="main">
        <div class="title"> Dogs by Breeds : )</div>
        <AllBreedButtons
          changeBreed={this.setBreed}
          highlighted={this.state.breed}
        />
        <DogImages breed={this.state.breed} />
        <ScrollUpButton class="arrow" />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
