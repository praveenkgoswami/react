import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export default class MainHeader extends Component {
  render(){
    return(
      <header>
        <div className="container">
          <ul>
            <li>Home</li>
            <li>Cart</li>
            <li>Login</li>
          </ul>
        </div>
      </header>
    )
  }
}
