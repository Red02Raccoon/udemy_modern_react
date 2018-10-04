import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };
  }
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.inputValue}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
  onInputChange(value) {
    this.setState({
      inputValue: value
    });

    this.props.onSearchInputChange(value);
  }
}

export default SearchBar;
