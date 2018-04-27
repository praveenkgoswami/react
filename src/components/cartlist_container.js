import React, { Component } from 'react';

export default class CarList extends Component {
  constructor(props) {
    super (props);

    this.state = { carttxt: '' };
  }
onChangeInput(cartTxt){
  this.setState({ cartTxt });
}
addList = () => {
  this.props.addToDo(this.state.cartTxt);
  this.setState({ cartTxt: '' })
}
  render(){
    return(
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
    );
  }
}
