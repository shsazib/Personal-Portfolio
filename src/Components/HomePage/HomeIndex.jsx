import React from "react";
import { Link } from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import {
  BsLayoutTextSidebar,
  BsFillFileEarmarkRichtextFill,
  BsStackOverflow,
  BsTwitter,
} from "react-icons/bs";
import { MdWorkOutline, MdOutlinePhoneIphone } from "react-icons/md";

// import Logo from './img/SAZIB.jpeg';
import { Typewriter } from "react-simple-typewriter";

// import homeModel from "./homeModel";

export default function HomeIndex() {
  return (
    <>
      <div className="body">
        <div className="container">
          {/* -------NavMenu Start------- */}

          <div className="full-menu">
            <ul className="menu">
              <li className="li about-li">
                <Link className="nav" to="/about">
                  <IoIosContact className="icon" />
                  <br />
                  ABOUT
                </Link>
              </li>


              <li className="li">
                <Link className="nav" to="/resume">
                  <BsLayoutTextSidebar className="icon" />
                  <br />
                  RESUME
                </Link>
              </li>
              <li className="li">
                <Link className="nav" to="/work">
                  <MdWorkOutline className="icon" />
                  <br />
                  WORKS
                </Link>
              </li>
              <li className="li">
                <Link className="nav" to="/blog">
                  <BsFillFileEarmarkRichtextFill className="icon" />
                  <br />
                  BLOG
                </Link>
              </li>
              <li className="last-li li">
                <Link className="nav" to="/contact">
                  <MdOutlinePhoneIphone className="icon" />
                  <br />
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/*------------NavMenu End--------- */}

          {/* ---------Profile Start---------- */}
          <div className="profile">
            {/* <img src={Logo} alt="logo" /> */}
            <div className="img">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="rgb(214, 214, 214)"
                  fill-opacity="1"
                  d="M0,192L80,165.3C160,139,320,85,480,106.7C640,128,800,224,960,240C1120,256,1280,192,1360,160L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
              </svg>
            </div>
            <h1>SH Sazib</h1>
            <h2>
              I'm a{" "}
              <span style={{ color: "rgb(5, 94, 74)", fontWeight: "bold" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "Front-end Developer",
                    "Back-end Developer",
                    "Freelancer",
                    "Student!",
                  ]}
                  loop={100}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <div className="social-icons">
              <a href="https://github.com/shsazib" target="blank"><AiFillGithub className="social-icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100005980906708" target="blank"><FaFacebookSquare className="social-icon" /></a>
              <a href="https://www.linkedin.com/in/sh-sazib-87ba2821a/" target="blank"><FaLinkedin className="social-icon" /></a>
              <a href="https://www.instagram.com/shakhaowathossainsazib/" target="blank"><AiFillInstagram className="social-icon" /></a>
              <a href="https://twitter.com/SazibShakhaowat" target="blank"><BsTwitter className="social-icon" /></a>
              <a href="https://stackoverflow.com/" target="blank"><BsStackOverflow className="social-icon" /></a>
            </div>
            <div className="cv-btn">
              <button>
                DOWNLOAD CV <FiDownload className="cv-btn-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
