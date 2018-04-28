import React, { Component } from 'react';
import { render } from 'react-dom';
import CartList from './components/cartlist_container';
import MainHeader from './components/header';
import AllRoutes from './components/routes';
import Welcome from './components/welcome';

/*
list = [{
text: 'pk', price: '12'
},
{
text: 'pk', price: '12'
}]
*/

class App extends Component{
  constructor(props){
    super (props);

    this.state = {
      list: [],
    };
  }


    render(){
      return(
        <div id="main">
          <MainHeader />
          <div className="container">
            <AllRoutes />
          </div>
        </div>
      );
    };
};

render(<App />, document.getElementById('root'));
