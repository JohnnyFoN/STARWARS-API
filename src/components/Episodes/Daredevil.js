import React, { Component } from "react";
import Slideshow from "../Slideshow";
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
      covers: imageURLArray
      //chosenCover: null
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

  getImages = () => {
    var coverList = this.state.covers;
    return coverList.map(cover => (
      <img src={cover} onClick={e => this.showSlider(e, cover)} />
    ));
  };

  render() {
    return (
      <div>
        <Slideshow
          covers={this.state.covers}
          chosenCover={this.state.chosenCover}
          show={this.state.show}
          hideSlider={this.hideSlider}
        />
        <h1 className="daredevil">DAREDEVIL</h1>
        <div id="galleryBody">
          <div id="cover">{this.getImages()}</div>
        </div>
      </div>
    );
  }
}

export default Daredevil;
