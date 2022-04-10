import React from "react";
import HomePage from "../HomePage/HomeIndex";
import "./ContactStyle.css";
import { BsArrowRight } from "react-icons/bs";

export default function Contact() {
  return (
    <div className="container">
      <HomePage />
      <div className="contact-container">
        <div className="full-contact">
          <div className="map">
            <h2>Get in Touch</h2>
              <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7297.072450235397!2d90.37692547230861!3d23.87059694925907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c40fb857cb01%3A0xb6ca60a98b4c89e2!2sUttara%2012%20No.%20Sector%20park!5e0!3m2!1sen!2sbd!4v1644919646448!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>

              <p>ADDRESS: Uttara 12 No Sector, Dhaka Bangladesh</p>
              <p>EMAIL: shsazibbhuiyan892939@gmail.com</p>
              <p>PHONE: +8801827892939</p>
              <p>FREELANCE: Available</p>
          </div>
          <div className="contact-form">
            <h2>Contact Form</h2>
            <input className="input-name" type="text" placeholder="Full Name" />
            <input className="input-email" type="text" placeholder="Email Address" /> <br />
            <textarea className="textarea-message" placeholder="Your Message"></textarea><br />
            <button><b>SEND MESSAGE</b><BsArrowRight className="btn-arry-icon" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
