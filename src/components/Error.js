import React, { Component } from "react";

class Error extends Component {
  state = {};
  render() {
    return <h2 className="err">No episode with that name!</h2>;
  }
}

export default Error;
