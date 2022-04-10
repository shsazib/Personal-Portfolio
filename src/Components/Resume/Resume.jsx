import React from "react";
import HomePage from "../HomePage/HomeIndex";
import "./ResumeStyle.css";
import { FaBriefcase, FaSchool, FaLanguage, FaCode } from "react-icons/fa";

export default function Resume() {
  return (
    <div className="container">
      <HomePage />
      <div className="resume-container">
        <div className="full-resume">
          <h2>Resume</h2>
          <div className="experience-item">
            <div className="experience-head">
              <FaBriefcase />
              <h4>EXPERIENCE</h4>
            </div>
            <div className="work">
              <p className="present-work">2020 - Present</p>
              <h5>React Developer</h5>
              <p className="p-company-name">
                <b>TweeTech LTD</b>
              </p>
              <p className="p-details">
                Optimize website and apps performance using latest technology.
              </p>
            </div>
          </div>

          <div className="education-item">
            <div className="education-head">
              <FaSchool />
              <h4>EDUCATION</h4>
            </div>

            <div className="full-edu">
              <p className="education">2022 - Present</p>
              <h5>Southeast University</h5>
              <p className="cuntry-name">
                <b>Bangladesh</b>
              </p>
              <p className="address">
                Southeast University Private university in Dhaka, Bangladesh
              </p>
            </div>

            <div className="full-edu">
              <p className="education">2016 - 2020</p>
              <h5>Computer Institute</h5>
              <p className="cuntry-name">
                <b>Bangladesh</b>
              </p>
              <p className="address">
                Computer Institute Govt College in Feni, Bangladesh
              </p>
            </div>

            <div className="full-edu">
              <p className="education">2005 - 2016</p>
              <h5>Shanti Niketan Cadet Institute</h5>
              <p className="cuntry-name">
                <b>Bangladesh</b>
              </p>
              <p className="address">
                Shanti Niketan Cadet Institute Private School in Feni,
                Bangladesh
              </p>
            </div>
          </div>

          {/* Skills */}

          <div className="skills">
            <div className="skill">
              <h2>Skills</h2>
              <div className="coding-skill">
                <div className="coding">
                  <FaCode className="cod-icon" />
                  <h4>CODING</h4>
                </div>

                <div className="html">
                  <p>HTML</p>
                  <div className="html-div1">
                    <div className="html-div2"></div>
                  </div>
                </div>

                <div className="css">
                  <p>CSS</p>
                  <div className="css-div1">
                    <div className="css-div2"></div>
                  </div>
                </div>

                <div className="bootstrap">
                  <p>Bootstrap</p>
                  <div className="bootstrap-div1">
                    <div className="bootstrap-div2"></div>
                  </div>
                </div>

                <div className="js">
                  <p>JavaScript</p>
                  <div className="js-div1">
                    <div className="js-div2"></div>
                  </div>
                </div>

                <div className="react">
                  <p>React JS</p>
                  <div className="react-div1">
                    <div className="react-div2"></div>
                  </div>
                </div>

                <div className="node">
                  <p>Node JS</p>
                  <div className="node-div1">
                    <div className="node-div2"></div>
                  </div>
                </div>

                <div className="express">
                  <p>Express JS</p>
                  <div className="express-div1">
                    <div className="express-div2"></div>
                  </div>
                </div>

                <div className="mongodb">
                  <p>Mongo DB</p>
                  <div className="mongodb-div1">
                    <div className="mongodb-div2"></div>
                  </div>
                </div>

                <div className="python">
                  <p>Python</p>
                  <div className="py-div1">
                    <div className="py-div2"></div>
                  </div>
                </div>

              </div>



              <div className="lan-skill">
                <div className="lan">
                  <FaLanguage className="lan-icon" />
                  <h4>LANGUAGES</h4>
                </div>
                
                <div className="bangla">
                  <p>Bangla</p>
                  <div className="bangla-div1">
                    <div className="bangla-div2"></div>
                  </div>
                </div>

                <div className="english">
                  <p>English</p>
                  <div className="english-div1">
                    <div className="english-div2"></div>
                  </div>
                </div>

                <div className="hindi">
                  <p>Hindi</p>
                  <div className="hindi-div1">
                    <div className="hindi-div2"></div>
                  </div>
                </div>

                <div className="ordu">
                  <p>Ordu</p>
                  <div className="ordu-div1">
                    <div className="ordu-div2"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
