import React, { Component } from "react";
import Slideshow from "../Slideshow";
import brokenCover from "../../../src/broken.jpg";

var imageURLArray = [
  "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/772889/772889._SX270_QL80_TTD_.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/736597/736597._SX270_QL80_TTD_.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/744276/744276._SX270_QL80_TTD_.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/750629/750629._SX270_QL80_TTD_.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/758777/758777._SX270_QL80_TTD_.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/758782/758782._SX270_QL80_TTD_.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/806684/806684._SX270_QL80_TTD_.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/771609/771609._SX270_QL80_TTD_.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/781324/781324._SX270_QL80_TTD_.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/786323/786323._SX270_QL80_TTD_.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/781329/781329._SX270_QL80_TTD_.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/794481/794481._SX270_QL80_TTD_.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/800994/800994._SX270_QL80_TTD_.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/806173/806173._SX270_QL80_TTD_.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/815043/815043._SX270_QL80_TTD_.jpg"
];

class Daredevil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      covers: imageURLArray,
      toggled: false,
      theme: "galleryPageBlack",
      isLoading: true
    };
  }

  showSlider = (e, cover) => {
    this.setState({
      show: true,
      chosenCover: cover
    });
  };

  hideSlider = () => {
    this.setState({ show: false, chosenCover: null });
  };

  handleLoad = e => {
    this.setState({
      isLoading: true
    });
  };

  handleImageError = e => {
    e.target.src = brokenCover;
    this.setState({
      chosenCover: brokenCover
    });
  };

  getImages = () => {
    var coverList = this.state.covers;
    return coverList.map(cover => (
      <img
        className="imageCover"
        onError={e => this.handleImageError(e)}
        src={cover}
        onClick={e => this.showSlider(e, cover)}
      />
    ));
  };

  toggleTheme = () => {
    var themeColor;
    this.setState({
      toggled: !this.state.toggled
    });
    this.state.toggled === false
      ? (themeColor = "galleryPageRed")
      : (themeColor = "galleryPageBlack");
    this.setState({
      theme: themeColor
    });
  };

  render() {
    return (
      <div className={this.state.theme}>
        <Slideshow
          covers={this.state.covers}
          chosenCover={this.state.chosenCover}
          show={this.state.show}
          hideSlider={this.hideSlider}
        />
        <div className="toggleBtn">
          <label class="switch">
            <input type="checkbox" onClick={() => this.toggleTheme()} />
            <span class="slider round"></span>
          </label>
        </div>
        <div id="galleryBody">
          <div id="cover">{this.getImages()}</div>
        </div>
      </div>
    );
  }
}

export default Daredevil;
