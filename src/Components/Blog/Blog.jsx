import React from "react";

import HomePage from "../HomePage/HomeIndex";
import './BlogStyle.css';
import SimpleSliderTwo from "./Photograpy/Photograpy";

import BlogOne from "./image/blog-1.jpg";
import BlogTwo from "./image/blog-3.jpg";
import BlogThree from "./image/blog-2.jpg";
import BlogFour from './image/blog-4.jpg';
import BlogFive from './image/blog-5.jpg';


export default function Blog() {
  return (
    <div className="container">
      <HomePage />
      <div className="blog-container">
        <div className="full-blog">
          <h2>Blog</h2>
          <div className="blog-one">
            <div className="first-blog">
              <img src={BlogOne} alt="BlogOne" />
              <span>April 20, 2016</span>
              <h4>By spite about do of allow</h4>
              <p>
                Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri
                zril ubique ut. Te cule tation munere noluisse. Enim torquatos…
              </p>
            </div>

            <div className="second-blog">
              <img src={BlogTwo} alt="BlogTwo" />
              <span>May 28, 2018</span>
              <h4>A Song And Dance Act</h4>
              <p>
                Me Ex audire suavitate has, ei quodsi tacimates sapientem sed,
                pri zril ubique ut. Te cule tation munere noluisse. Enim
                torquatos…
              </p>
            </div>
          </div>

          <div className="blog-two">
            <div className="third-blog">
              <img src={BlogThree} alt="BlogTthree" />
              <span>Fabruary 02, 2015</span>
              <h4>Designing the perfect</h4>
              <p>
                Me Ex audire suavitate has, ei quodsi tacimates sapientem sed,
                pri zril ubique ut. Te cule tation munere noluisse. Enim
                torquatos…
              </p>
            </div>

            <div className="fourth-blog">
              <img src={BlogFour} alt="BlogFour" />
              <span>Jun 11, 2021</span>
              <h4>Music Player Design</h4>
              <p>
                Me Ex audire suavitate has, ei quodsi tacimates sapientem sed,
                pri zril ubique ut. Te cule tation munere noluisse. Enim
                torquatos…
              </p>
            </div>
          </div>

          <div className="blog-three">

            <div className="five-blog">
              <img src={BlogFive} alt="BlogFive" />
              <span>May 09, 2013</span>
              <h4>Designing the perfect</h4>
              <p>
                Me Ex audire suavitate has, ei quodsi tacimates sapientem sed,
                pri zril ubique ut. Te cule tation munere noluisse. Enim
                torquatos…
              </p>
            </div>

          </div>
            <div className="design">
              <div className="all-design">
                <SimpleSliderTwo />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
