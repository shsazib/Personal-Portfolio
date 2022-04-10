import React, { Component } from "react";
import "./DesignStyle.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import WebDesignOne from "./image/webDesign1.jpg";
import WebDesignTwo from "./image/webDesign2.jpg";
import WebDesignThree from "./image/webDesign3.jpeg";
import WebDesignFour from "./image/webDesign4.jpg";
import WebDesignFive from "./image/webDesign5.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2>Web Design</h2>
        <Slider {...settings} >
          <div className="design-item">
            <img src={WebDesignOne} alt="RiadVai" />
          </div>

          <div className="design-item">
            <img src={WebDesignTwo} alt="RandomOne" />
          </div>

          <div className="design-item">
            <img src={WebDesignThree} alt="Randomtwo" />
          </div>

          <div className="design-item">
            <img src={WebDesignFour} alt="Randomtwo" />
          </div>

          <div className="design-item">
            <img src={WebDesignFive} alt="Randomtwo" />
          </div>
        </Slider>
      </div>
    );
  }
}
