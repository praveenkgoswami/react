import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return(
      <div className="login-container">
        <h2 className="text-center">Login</h2>
        <form>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <span className="fa fa-user"></span>
              </span>
            </div>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon2">
                <span className="fa fa-lock"></span>
              </span>
            </div>
            <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2" />
          </div>
          <div className="input-group mb-3">
            <input type="button" className="btn btn-default" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}
