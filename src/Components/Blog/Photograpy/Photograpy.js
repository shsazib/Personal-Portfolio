import React, { Component } from "react";
import "./PhotograpyStyle.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RandomImg from "./image/riadVai.jpg";
import RandomImgTwo from "./image/randomImg-1.jpeg";
import RandomImgThree from "./image/randomImg-2.jpeg";
import RandomImgFour from "./image/randomImg-6.jpg";
import RandomImgFive from "./image/randomImg-7.jpg";
import RandomImgSix from "./image/randomImg-8.jpg";
import RandomImgSeven from "./image/randomImg-5.jpeg";
import RandomImgEight from "./image/randomImg-9.jpg";
import RandomImgNine from "./image/randomImg-4.jpeg";
import RandomImgTen from "./image/randomImg-3.jpeg";

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
        <h2>Photograpy</h2>
        <Slider {...settings}>
          <div className="photo-item">
            <img src={RandomImg} alt="RiadVai" />
          </div>

          <div className="photo-item">
            <img src={RandomImgTwo} alt="RandomOne" />
          </div>

          <div className="photo-item">
            <img src={RandomImgThree} alt="Randomtwo" />
          </div>

          <div className="photo-item">
            <img src={RandomImgFour} alt="Randomtwo" />
          </div>

          <div className="photo-item">
            <img src={RandomImgFive} alt="Randomtwo" />
          </div>

          <div className="photo-item">
            <img src={RandomImgSix} alt="Randomtwo" />
          </div>

          <div className="photo-item">
            <img src={RandomImgSeven} alt="Randomtwo" />
          </div>

          <div className="photo-item">
            <img src={RandomImgEight} alt="Randomtwo" />
          </div>

          <div className="photo-item">
            <img src={RandomImgNine} alt="RandomImg" />
          </div>

          <div className="photo-item">
            <img src={RandomImgTen} alt="RandomImg" />
          </div>
        </Slider>
      </div>
    );
  }
}
