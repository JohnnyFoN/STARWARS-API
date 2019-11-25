import React, { Component } from "react";
import Slideshow from "./Slideshow";

class CoverImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  showSlider = (e, cover) => {
    this.setState({
      show: true,
      chosenCover: this.props.chosenCover
    });
  };

  hideSlider = () => {
    this.setState({ show: false, chosenCover: null });
  };

  render() {
    return (
      <div>
        <img
          src={this.props.src}
          className="imageCover"
          onError={() => {
            console.log("error");
          }}
          onClick={e => this.showSlider(e, this.props.src)}
        />
        <Slideshow
          covers={this.props.covers}
          chosenCover={this.props.src}
          show={this.state.show}
          hideSlider={this.hideSlider}
        />
      </div>
    );
  }
}

export default CoverImage;

/** onLoad={() => {
          this.setState({isLoading: false)
        }} */
