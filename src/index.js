import React, { Component } from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_details";

const API_KEY = "AIzaSyAg7dmNNxwHFM5nAcwiQ_SH6csbCZkKjcg";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("rock");
  }

  videoSearch(inputValue) {
    YTSearch(
      {
        key: API_KEY,
        term: inputValue
      },
      videos => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      }
    );
  }

  render() {
    const videoSearch = _.debounce(value => {
      this.videoSearch(value);
    }, 300);
    return (
      <div>
        <SearchBar onSearchInputChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
