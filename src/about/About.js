import React, { Component } from "react";
import Avatar from "../avatar/Avatar.js";
import AboutMenu from "./AboutMenu.js";

export default class About extends Component {
    render() {
        return (
            <> 
            <Avatar page="about"/>
            <AboutMenu />
            <div id="references"> Icons made by <a href="https://www.flaticon.com/authors/muhammad-ali" title="Muhammad Ali"> Muhammad Ali </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
             </>
        )
    }
}