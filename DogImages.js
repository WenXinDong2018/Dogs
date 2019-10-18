import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroller";

export default class DogImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      breed: this.props.breed,
      dataSource: [],
      uniqueDataSource: new Set()
    };
  }

  updateImageList = () => {
    let url;

    if (this.state.breed !== "random") {
      url = "https://dog.ceo/api/breed/".concat(this.state.breed, "/images");
    } else {
      url = "https://dog.ceo/api/breeds/image/random/20";
    }
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        if (this.state.breed === "random") {
          let newList = this.state.dataSource;
          let newUniqueSet = this.state.uniqueDataSource;
          for (var i = 0; i < 20; i++) {
            if (!newUniqueSet.has(responseJson.message[i])) {
              newList.push(responseJson.message[i]);
              newUniqueSet.add(responseJson.message[i]);
            }
          }
          this.setState({
            isLoading: false,
            dataSource: newList,
            uniqueDataSource: newUniqueSet
          });
        } else {
          this.setState({
            isLoading: false,
            dataSource: responseJson.message
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  handleLoadMore = () => {
    if (this.state.breed === "random") {
      this.updateImageList();
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.breed !== this.props.breed) {
      this.setState({ breed: this.props.breed });
      this.updateImageList(this.props.breed);
    }
  }
  componentDidMount() {
    this.updateImageList(this.state.breed);
  }

  render() {
    if (this.state.isLoading) {
      return <div>loading</div>;
    }
    return (
      <InfiniteScroll
        class="dogImages"
        loadMore={this.handleLoadMore}
        pageStart={0}
        hasMore={true}
      >
        {this.state.dataSource.map(item => (
          <img alt="breed" class="image" src={item} />
        ))}
      </InfiniteScroll>
    );
  }
}
