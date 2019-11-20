import React, { Component } from "react";
import { checkServerIdentity } from "tls";
var n = 0;
class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      covers: props.covers,
      show: props.show
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.chosenCover) {
      this.setState({
        chosenCover: nextProps.chosenCover
      });
    } else {
      this.setState({
        chosenCover: null
      });
    }
  }

  changeSlide = x => {
    var next;
    var last = this.state.covers.indexOf(
      this.state.covers[this.state.covers.length - 1]
    );
    var first = this.state.covers.indexOf(this.state.covers[0]);
    var chosen = this.state.covers.indexOf(this.state.chosenCover);

    if (chosen === last) {
      if (x === 1) {
        next = this.state.covers[0];
      }
      if (x === -1) {
        next = this.state.covers[(chosen += x)];
      }
    } else if (chosen === first) {
      if (x === 1) {
        next = this.state.covers[(chosen += x)];
      }
      if (x === -1) {
        next = this.state.covers[this.state.covers.length - 1];
      }
    } else {
      next = this.state.covers[(chosen += x)];
    }
    this.setState({
      chosenCover: next
    });
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div id="slideshow">
        <div className="btn">
          <button
            id="lb"
            class="w3-button w3-black w3-display-left"
            onClick={() => this.changeSlide(-1)}
          >
            &#10094;
          </button>
        </div>
        <div id="slideshowInner">
          <img src={this.state.chosenCover} />
        </div>
        <div className="btn">
          <button
            id="rb"
            class="w3-button w3-black w3-display-right"
            onClick={() => this.changeSlide(+1)}
          >
            &#10095;
          </button>
        </div>
        <div>
          <button id="cb" onClick={this.props.hideSlider}>
            X
          </button>
        </div>
      </div>
    );
  }
}

export default Slideshow;
