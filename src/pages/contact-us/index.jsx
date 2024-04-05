import React from "react";
import { Navbar, Button } from "../../components";
import Grid from "@mui/material/Grid";
import "./index.css";
const ContactUs = () => {
  return (
    <div className="tomnov-generate-container">
      <Navbar margin={true} />
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={8}>
          <div className="contact-container">
            <div className="contact-header">Get In Touch With Us</div>
            <div className="contact-data-main">
              <Grid container spacing={5}>
                <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
                  <div className="contact-left-main">
                    <p className="contact-left-title">Phone Number</p>
                    <p className="contact-left-value">0012334566</p>
                  </div>
                  <div className="contact-left-main">
                    <p className="contact-left-title">Email Address</p>
                    <p className="contact-left-value">Johndoe@example.com</p>
                  </div>
                  <div className="contact-left-main" style={{borderWidth:"0px"}}>
                    <p className="contact-left-title">Location</p>
                    <p className="contact-left-value">Lorem Ipsum</p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
                  <p className="contact-heading">Send us a message</p>
                  <p className="contact-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla fringilla nunc in molestie feugiat.{" "}
                  </p>
                  <div className="contact-input-main">
                    <div>
                      <input type="text" placeholder="Your Name" />
                    </div>
                    <div>
                      <input type="email" placeholder="Your E-mail" />
                    </div>
                  </div>
                  <div className="contact-input-main">
                    <div>
                      <input type="text" placeholder="Phone Number" />
                    </div>
                    <div>
                      <input type="text" placeholder="Subject" />
                    </div>
                  </div>
                  <div className="contact-textarea">
                    <textarea placeholder="Message"></textarea>
                  </div>
                  <div className="contact-button">
                    <Button title="Send Message" />
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
      </Grid>
    </div>
  );
};
export default ContactUs;
