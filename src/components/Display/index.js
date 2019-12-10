import React from "react";
import emoji from "../../emoji.json";

function Display(props) {
    console.log(props);
    console.log("Hello");
    // for(var i=0; i<emoji.length; i++){

    // }

    return (
        <div>
            <img src={props.emoji.image} alt={props.search}></img>
        </div>
    )
}

export default Display;