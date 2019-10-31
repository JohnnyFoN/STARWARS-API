import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EpisodeIV from "./components/Episodes/EpisodeIV";
import EpisodeV from "./components/Episodes/EpisodeV";
import EpisodeVI from "./components/Episodes/EpisodeVI";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import All from "./components/All";
import PostDetails from "./components/PostDetails";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  //<Route path="/" component={Navigation} exact />
  //

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/" component={All} exact />}
            <Route path="/iv" component={EpisodeIV} />
            <Route path="/v" component={EpisodeV} />
            <Route path="/vi" component={EpisodeVI} />
            <Route path="/post/:id" component={PostDetails} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
