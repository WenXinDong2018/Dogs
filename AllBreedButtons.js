import React, { Component } from "react";
import BreedButton from "./BreedButton";

export default class AllBreedButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    return fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(responseJson => {
        var keys = [];
        for (var k in responseJson.message) keys.push(k);
        this.setState({
          isLoading: false,
          dataSource: keys
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return <div>loading</div>;
    }

    return (
      <div class="buttonWrapper">
        {this.state.dataSource.map(item => (
          <BreedButton
            changeBreed={this.props.changeBreed}
            highlighted={this.props.highlighted}
            key={item}
            breed={item}
          />
        ))}
      </div>
    );
  }
}
