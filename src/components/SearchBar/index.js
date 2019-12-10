import React, { Component } from "react";
import emoji from "../../emoji.json";
import Display from "../Display";

class SearchBar extends Component {
    state = {
        searchValue: ""
    }

    handleInputChange = event => {
        event.preventDefault();
        console.log(event.target);
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleEvent = event => {
        event.preventDefault();
        console.log("inside submit button function");
        console.log(this.state.searchValue);
        console.log(emoji[0].name);

        for (let i = 0; i < emoji.length; i++) {
            if (this.state.searchValue === emoji[i].name) {
                console.log("Found");
                console.log(emoji[i]);
                this.setState({ render: !this.state.render,
                emoji: emoji[i] })
            }
            else {
                console.log("Not found");
            }
        }
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <input className="form-control mr-sm-2"
                        type="search" placeholder="Search" aria-label="Search"
                        name="searchValue"
                        value={this.state.searchValue} onChange={this.handleInputChange}
                    ></input>
                    <button className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                        onClick={this.handleEvent}
                    >Search</button>
                    {this.state.render &&
                        <Display
                            search={this.state.searchValue}
                            emoji={this.state.emoji}
                        />}
                </form>
            </nav>
        )
    }
}

export default SearchBar;