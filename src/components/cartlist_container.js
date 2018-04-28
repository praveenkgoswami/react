import React, { Component } from 'react';

export default class CartList extends Component {
  constructor(props) {
    super (props);

    this.state = {
      list: [],
      carttxt: ''
    };
  }
onChangeInput(cartTxt){
  this.setState({ cartTxt });
}
addList = () => {
  this.addToDo(this.state.cartTxt);
  this.setState({ cartTxt: '' })
}

addToDo = (cartTxt = '') => {
  if((cartTxt!= '') && (cartTxt.includes("-"))) {
    const parts = cartTxt.split('-', 2);
    if( (isNaN(parts[0])) && (!isNaN(parts[1])) ) {
      this.setState({list: [...this.state.list, {text: parts[0], price: parts[1], count: 1, total: parts[1] }]});
    }
    else{
      alert("Please Enter like 'product-21'");
    }
  }
  else{
    alert("Please Enter like 'product-21'");
  }
}

deleteItem = (e) => {
  const index = parseInt(e.target.getAttribute('data-value'))
  const list = [...this.state.list]
  list: list.splice(index,1);
  this.setState({ list })
};

increment = (e) => {
  const index = parseInt(e.target.getAttribute('data-value'))
  const list = [...this.state.list]
  list[index].count = list[index].count + 1
  list[index].total = list[index].count*list[index].price
  this.setState({ list })
}

decrement = (e) => {
  const index = parseInt(e.target.getAttribute('data-value'))
  const list = [...this.state.list]
  if(list[index].count >= 2){
    list[index].count = list[index].count - 1
    list[index].total = list[index].count*list[index].price
    this.setState({ list })
  }
}

  render(){
    return(
      <div className="cart-app-container">
        <h2 className="text-center">Cart App</h2>
        <div className="text-center">
          <div className="input-group">
            <input className="form-control"
            placeholder="Enter item & Price seperated by -"
            value={this.state.cartTxt}
            onChange={e => this.onChangeInput(e.target.value )} />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" onClick={this.addList}>Add</button>
            </div>
          </div>
        </div>
        <div className="">
          <ul className="list">
            {
              this.state.list.map((item, index) => {
                return(
                  <li className="list-group-item" key={index}>
                    <span className="item">{item.text}</span>
                    <span className="price">{item.total}</span>
                    <span className="btn btn-primary" data-value={index} onClick={this.decrement}>-</span>
                    <span className="quantity">{item.count}</span>
                    <span className="btn btn-primary" data-value={index} onClick={this.increment}>+</span>
                    <button className="btn btn-danger" data-value={index} onClick={this.deleteItem}>&times;</button>
                  </li>
                );
              })
            }
          </ul>
          <div className="total-wrap">
            <span>Total</span>
            <span className="subTotal">
              {
                this.state.list.reduce( ( sum, currentValue ) => sum + parseInt(currentValue['total']), 0 )
              }
            </span>
          </div>
        </div>
      </div>
    );
  }
}
