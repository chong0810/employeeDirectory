import React, { Component } from 'react'
import '../App.css';


export default class Search extends Component {
    render() {
        return (
            <div>
                <div className="searchIcon">Search:</div>
                <input type="search" name="search" placeholder="search something" />
            </div>
        )
    }
}