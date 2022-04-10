import React from "react";
import HomePage from "../HomePage/HomeIndex";
import "./AboutStyle.css";
import { ImHtmlFive } from "react-icons/im";
import { BsCodeSlash } from "react-icons/bs";
import { GiBattery50, GiBattery100 } from "react-icons/gi";
import SimpleSlider from './Testimonial/Testimonial';

export default function About() {
  return (
    <>
      <div className="container">
        <HomePage />
        <div className="about-container">
          <div className="full-about">
            <div className="about-me">
              <h2>About Me</h2>
              <p>
                <b>Hello! I’m Shakhaowat Hossain Sazib.</b> Back-end & Frond-end
                developer from Dhaka, Bangladesh. I have rich experience in React
                development, also I am good at MERN. I love to talk with you
                about our unique.
              </p>
              <div className="about-address">
                <p>AGE: 24</p>
                <p>RESIDENCE: Bangladesh</p>
                <p>FREELANCE: Available</p>
                <p>ADDRESS: Uttara 12 No Sector, Dhaka, Bangladesh</p>
              </div>
            </div>
            <div className="my-services">
              <div className="all-services">
                <h2>My Services</h2>
                <div className="front-end">
                  <ImHtmlFive className="front-end-icon" />
                  <h3>Front-end</h3>
                  <p>
                    Modern and mobile-ready website that will help you reach all
                    of your marketing.
                  </p>
                </div>
                <div className="back-end">
                  <BsCodeSlash className="back-end-icon" />
                  <h3>Back-end</h3>
                  <p>
                    UI/UX focus on the user, frontend focus on the settings of
                    the user, and backend focus on the data.
                  </p>
                </div>
              </div>
            </div>
            <div className="pricing">
              <div className="all-pricing">
                <h2>Pricing</h2>
                <div className="basic">
                  <GiBattery50 className="basic-icon" />
                  <h3>Basic</h3>
                  <p>
                    MERN Development <br />
                    Installation Services <br />
                    SEO Audit <br />
                    <del>Hosting & Domain</del> <br />
                    <del>MERN Security</del>
                  </p>
                </div>
                <div className="pro">
                  <GiBattery100 className="pro-icon" />
                  <h3>Pro</h3>
                  <p>
                    MERN Development <br />
                    Installation Services <br />
                    SEO Audit <br />
                    Hosting & Domain <br />
                    MERN Security
                  </p>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="all-testimonial">
                <SimpleSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
