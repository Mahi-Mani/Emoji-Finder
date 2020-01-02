import React from "react";
import emoji from "../../emoji.json";

export function DisplayList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

export function DisplayListItem(props) {
    return (
        <div>
            <li className="list-group-item">
                <img src={props.image} width="50px"></img>   {props.name}</li>
        </div>
    )
}
