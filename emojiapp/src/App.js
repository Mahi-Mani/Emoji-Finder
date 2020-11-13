import React, { Component } from "react";
import emoji from "./emoji.json";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <SearchBar />
      </div>
    )
  }
}

export default App;
