import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";

class All extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Main store={this.props.store} />
      </div>
    );
  }
}

export default All;
