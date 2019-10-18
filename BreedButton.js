import React, { Component } from "react";

export default class BreedButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlighed: this.props.highlighed
    };
  }

  handleClick = () => {
    this.props.changeBreed(this.props.breed);
  };

  chooseColor = () => {
    let colors = [
      "#18d3af",
      "#ffa500",
      "#9ad318",
      "#5cbdbb",
      "#5cbdbb",
      "#c6c3cc",
      "#cc2b5e",
      "#b8cecd",
      "#cb8c9d",
      "#943b5e",
      "#7f99b1",
      "#83c9c7",
      "#ff9994"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  render() {
    let style =
      this.props.highlighted === this.props.breed
        ? "btn_highlighted"
        : "breedbutton";

    return (
      <div>
        <button
          onClick={this.handleClick}
          class={style}
          style={{ background: this.chooseColor() }}
        >
          {this.props.breed[0].toUpperCase()}
          {this.props.breed.substr(1)}
        </button>
      </div>
    );
  }
}
