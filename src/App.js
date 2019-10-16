import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.state.listOfUsers);
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
