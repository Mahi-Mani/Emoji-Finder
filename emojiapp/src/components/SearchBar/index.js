import React, { Component } from "react";
import emoji from "../../emoji.json";
import API from "../utils/API";
import Display from "../Display";
import { DisplayList, DisplayListItem } from "../DisplayList";

class SearchBar extends Component {
  state = {
    searchValue: "",
    emojis: []
  }

  componentDidMount = () => {
    this.getAllEmojis();
    this.setState({
      show: true
    });
  }

  getAllEmojis = () => {
    API.getEmoji().then(results => {
      console.log(results.data);
      this.setState({
        emojis: results.data
      });
    })
  }

  handleInputChange = event => {
    // event.preventDefault();
    console.log(this.state.emojis);
    this.setState({
      show: false
    })
    // console.log(event.target);
    const { name, value } = event.target;
    console.log(` before setting state ${value} `);
    this.setState({
      [name]: value
    })
    console.log(` after setting state ${this.state.searchValue} `);

    this.state.emojis.map(icon => {
      let name = icon.slug;
      let nameLowerCase = name.toLowerCase();
      let searchValueLowerCase = this.state.searchValue.toLowerCase();
      let check = nameLowerCase.includes(searchValueLowerCase);

      if (check) {
        console.log(`The value matches to true`);
        console.log(icon.slug);

        this.setState({
          render: !this.state.render,
          emoji: icon
        })
        console.log(this.state.emoji);
      }
      else
        check = false;
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <form className="form-inline">
            <input className="form-control mr-sm-2"
              type="search" placeholder="Search" aria-label="Search"
              name="searchValue"
              value={this.state.searchValue} onChange={this.handleInputChange}
            ></input>
            <br></br><br></br><br></br><br></br>
          </form>
        </nav>
        {/* {this.state.render &&
          <DisplayList>
            <DisplayListItem
              key={this.state.emoji.id}
              name={this.state.emoji.name}
              image={this.state.emoji.image}
            />
          </DisplayList>} */}
        {/* {this.state.show && */}
        <DisplayList>
          {this.state.emojis.map((icon, index) => (
            <DisplayListItem
              key={index}
              name={icon.slug}
              image={icon.character}
            />
          ))}
        </DisplayList>
        {/* } */}
      </div>
    )
  }
}

export default SearchBar;