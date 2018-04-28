import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Link, Switch} from 'react-router-dom';
import Welcome from './welcome';
import CartList from './cartlist_container';
import Login from './login';

export default class AllRoutes extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <header>
            <div className="container">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </div>
          </header>
          <div className="container">
            <Route exact path="/" component={Welcome} />
            <Route path="/cart" component={CartList} />
            <Route path="/login" component={Login} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
