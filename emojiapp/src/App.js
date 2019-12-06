import React, { Component } from "react";
import emoji from "./emoji.json";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
// import Footer from "./components/Footer";

class App extends Component {



render() {
    return (
        <div>
            <Nav />
            <SearchBar />
            {/* <Footer /> */}
        </div>

    )
}
}

export default App;
