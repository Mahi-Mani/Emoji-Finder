import React, { Component } from "react";
import emoji from "../../emoji.json";
import Display from "../Display";
import { DisplayList, DisplayListItem } from "../DisplayList";

class SearchBar extends Component {
    state = {
        searchValue: ""
    }

    handleInputChange = event => {
        event.preventDefault();
        // console.log(event.target);
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })

        emoji.map(icon => {
            let name = icon.name;
            let nameLowerCase = name.toLowerCase();
            let searchValueLowerCase = this.state.searchValue.toLowerCase();

            if(nameLowerCase.includes(searchValueLowerCase)){
                console.log(`The value matches to true`);
                console.log(icon.name);

                this.setState({
                    render: !this.state.render,
                    emoji: icon
                })
            }
        })

        // for (let i = 0; i < emoji.length; i++) {
        //     let searchValueLowerCase = this.state.searchValue.toLowerCase();
        //     let emojiNameLowerCase = emoji[i].name.toLowerCase();

        //     if (searchValueLowerCase === emojiNameLowerCase) {
        //         console.log("Found");

        //         this.setState({
        //             render: !this.state.render,
        //             emoji: emoji[i]
        //         })
        //     }
        // }
    }

    handleEvent = event => {
        event.preventDefault();
        console.log("inside submit button function");

        for (let i = 0; i < emoji.length; i++) {
            let searchValueLowerCase = this.state.searchValue.toLowerCase();
            let emojiNameLowerCase = emoji[i].name.toLowerCase();

            if (searchValueLowerCase === emojiNameLowerCase) {
                console.log("Found");

                this.setState({
                    render: !this.state.render,
                    emoji: emoji[i]
                })
            }
            // else {
            //     console.log("Not found");
            //     this.setState({ render: !this.state.render,
            //     emoji: emoji[3] })
            // }
        }
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
                        <button className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                            onClick={this.handleEvent}
                        >Search</button><br></br><br></br><br></br><br></br>
                        {this.state.render &&
                            <Display
                                search={this.state.searchValue}
                                emoji={this.state.emoji}
                            />}
                        <br></br><br></br><br></br><br></br>
                    </form>
                </nav>
                <DisplayList>
                    {emoji.map(icon => (
                        <DisplayListItem
                            key={icon.id}
                            name={icon.name}
                            image={icon.image}
                        />
                    ))}
                </DisplayList>
                {this.state.render &&
                            <DisplayList>
                                <DisplayListItem
                                    key={this.state.emoji.id}
                                    name={this.state.emoji.name}
                                    image={this.state.emoji.image}
                                />
}
                        </DisplayList>}
            </div>
        )
    }
}



export default SearchBar;