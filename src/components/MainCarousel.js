import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/MainCarousel.css";

class MainCarousel extends Component {
  render() {
    return (
      <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
        <div className="carousel slide-1">this is slide 1</div>
        <div className="carousel">this is slide 2</div>
        <div className="carousel">this is slide 3</div>
      </Carousel>
    );
  }
}

export default MainCarousel;