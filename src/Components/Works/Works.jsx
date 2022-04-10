import React from "react";


import SimpleSlider from "./Design/Design";
import HomePage from "../HomePage/HomeIndex";
import "./WorksStyle.css";






export default function Works() {
  return (
    <>
      <div className="container">
        <HomePage />

        <div className="work-container">
          <div className="full-work">
            <div className="design">
              <div className="all-design">
                <SimpleSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
