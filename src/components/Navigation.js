import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <div className="navs">
        <NavLink className="navElement" to="/">
          Home
        </NavLink>
        <NavLink className="navElement" to="/iv">
          Episode IV
        </NavLink>
        <NavLink className="navElement" to="/v">
          Episode V
        </NavLink>
        <NavLink className="navElement" to="/vi">
          Episode VI
        </NavLink>
        <NavLink className="navElement" id="nav4" to="/daredevil">
          Daredevil
        </NavLink>
      </div>
    );
  }
}

export default Navigation;
