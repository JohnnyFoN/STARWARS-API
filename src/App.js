import React from "react";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import EpisodeIV from "./components/Episodes/EpisodeIV";
import EpisodeV from "./components/Episodes/EpisodeV";
import EpisodeVI from "./components/Episodes/EpisodeVI";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import All from "./components/All";
import PostDetails from "./components/PostDetails";
import Daredevil from "./components/Episodes/Daredevil";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route
              path="/"
              component={() => <All store={this.props.store} />}
              exact
            />
            }
            <Route path="/iv" component={EpisodeIV} />
            <Route path="/v" component={EpisodeV} />
            <Route path="/vi" component={EpisodeVI} />
            <Route path="/daredevil" component={Daredevil} />
            <Route path="/post/:id" component={PostDetails} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
