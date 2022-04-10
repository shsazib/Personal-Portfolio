import React, { Component } from "react";
import './TestimonialStyle.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RiadVai from "./image/riadVai.jpg";
import RandomOne from "./image/randomImg-1.jpeg";
import Randomtwo from "./image/randomImg-2.jpeg";
import RandomThree from "./image/randomImg-3.jpeg";
import RandomFour from "./image/randomImg-4.jpeg";
import RandomFive from "./image/randomImg-5.jpeg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Testimonials</h2>
        <Slider {...settings}>

          <div className="testimonial-item">
            <p className="comment"> <q> A good designer and trustworthy. You can hire if you want. I hope you will not lose if you hire him. </q> </p>
            <img src={RiadVai} alt="RiadVai" />
            <h3>Belayet Riad</h3>
            <p className="surname">CEO</p>
          </div>

          <div className="testimonial-item">
            <p className="comment"> <q> Contrary to popular belief, Lorem Ipsum is not simply random text. It piece of classical Latin literature </q> </p>
            <img src={RandomOne} alt="RandomOne" />
            <h3>Allison Gould</h3>
            <p className="surname">CEO</p>
          </div>

          <div className="testimonial-item">
            <p className="comment"> <q> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. </q> </p>
            <img src={Randomtwo} alt="Randomtwo" />
            <h3>Donald Daniel</h3>
            <p className="surname">CEO</p>
          </div>

          <div className="testimonial-item">
            <p className="comment"> <q> A good designer and trustworthy. You can hire if you want. I hope you will not lose if you hire him. </q> </p>
            <img src={RandomThree} alt="RandomThree" />
            <h3>Katherine Heigl</h3>
            <p className="surname">CEO</p>
          </div>

          <div className="testimonial-item">
            <p className="comment"> <q> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </q> </p>
            <img src={RandomFour} alt="RandomFour" />
            <h3>Eva Longoria</h3>
            <p className="surname">CEO</p>
          </div>

          <div className="testimonial-item">
            <p className="comment"> <q> A good designer and trustworthy. You can hire if you want. I hope you will not lose if you hire him. </q> </p>
            <img src={RandomFive} alt="RandomFive" />
            <h3>Angela Case</h3>
            <p className="surname">CEO</p>
          </div>
          
        </Slider>
      </div>
    );
  }
}