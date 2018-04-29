import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Welcome from './welcome';
import CartList from './cartlist_container';
import Login from './login';
import NoMatch from './nomatch';
import BooksContainer from './books_container';
import { Provider } from 'react-redux';
import reducer from '../reducers';
import { createStore } from 'redux';

export default class AllRoutes extends Component {
  render() {
    return(
      <div id="main">
        <Provider store={createStore(reducer)}>
          <Router>
            <div>
              <header>
                <div className="container">
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/books">Books</Link></li>
                  </ul>
                </div>
              </header>
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Welcome} />
                  <Route path="/cart" component={CartList} />
                  <Route path="/login" component={Login} />
                  <Route path="/books" component={BooksContainer} />
                  <Route component={NoMatch} />
                </Switch>
              </div>
            </div>
          </Router>
        </Provider>
      </div>
    )
  }
}
