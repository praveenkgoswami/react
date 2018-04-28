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
          <Route exact path="/" component={Welcome} />
          <Route path="/" component={CartList} />
          <Route path="/" component={Login} />
        </div>
      </BrowserRouter>
    )
  }
}
