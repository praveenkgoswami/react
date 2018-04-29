import React, { Component } from 'react';
import { render } from 'react-dom';
import AllRoutes from './components/routes';

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
  }
    render(){
      return(        
        <AllRoutes />
      );
    };
};

render(<App />, document.getElementById('root'));
