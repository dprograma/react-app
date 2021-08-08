import React, { Component } from "react";

class Carousel1 extends Component {
  state = {
    imageUrl: {
      icon: "images/alfred1.jpg",
      alt: "large banner here..."
    }
  };
  render() {
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-12">
              <img
                src={this.state.imageUrl.icon}
                alt={this.state.imageUrl.alt}
              />
            </div>
          </div>
        </div>
    );
  }
}

export default Carousel1;
