import React, { Component } from "react";
import API from "../utils/API";
import { DisplayList, DisplayListItem } from "../DisplayList";
import Loading from "../Loading";

class SearchBar extends Component {
  state = {
    searchValue: "",
    emojis: [],
    hasFetched: false,
    filteredSearch: []
  }

  componentDidMount = () => {
    this.getAllEmojis();
  }

  getAllEmojis = () => {
    API.getEmoji().then(results => {
      console.log(results.data);
      this.setState({
        emojis: results.data,
        hasFetched: true
      });
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    this.search();
  }

  search = () => {
    const filteredArray = this.state.emojis.filter(emoji => {
      return emoji.slug.includes(this.state.searchValue);
    });
    this.setState({
      filteredSearch: filteredArray
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <form className="form-inline">
            <input className="form-control mr-sm-2"
              type="search" placeholder="Search" aria-label="Search"
              name="searchValue"
              value={this.state.searchValue}
              onChange={this.handleInputChange}
            ></input>
            <br></br><br></br><br></br><br></br>
          </form>
        </nav>
        {this.state.hasFetched ?
          <>
            {
              this.state.filteredSearch.length === 0 ?
                <DisplayList>
                  {this.state.emojis.map((icon, index) => (
                    <DisplayListItem
                      key={index}
                      name={icon.slug}
                      image={icon.character}
                      hello={"all"}
                    />
                  ))}
                </DisplayList>
                :
                <DisplayList>
                  {this.state.filteredSearch.map((icon, index) => (
                    <DisplayListItem
                      key={index}
                      name={icon.slug}
                      image={icon.character}
                      hello={"filter"}
                    />
                  ))}
                </DisplayList>
            }
          </>
          :
          <Loading />
        }
      </div>
    )
  }
}

export default SearchBar;