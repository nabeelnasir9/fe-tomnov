import React from "react";
import Grid from "@mui/material/Grid";
import "./index.css";
import HowItWwrksImage1 from "./../../assets/how-it-works-1.svg";
import HowItWwrksImage2 from "./../../assets/how-it-works-2.svg";
import HowItWwrksImage3 from "./../../assets/how-it-works-3.svg";
const HowItWworks = () => {
  return (
    <div className="h-i-w-container">
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
        <Grid xs={10} sm={10} md={10} lg={10} xl={10}>
          <h1 className="h-i-w-heading">How it works?</h1>
          <p className="h-i-w-title">
            Unlock your creative potential effortlessly
          </p>
          <div className="h-i-w-header">
            <div className="h-i-w-header-box">
              <div>
                <img src={HowItWwrksImage1} alt="first" />
              </div>
            </div>
            <div className="h-i-w-header-box-line" />
            <div className="h-i-w-header-box">
              <div>
                <img src={HowItWwrksImage2} alt="Second" />
              </div>
            </div>
            <div className="h-i-w-header-box-line" />
            <div className="h-i-w-header-box">
              <div>
                <img src={HowItWwrksImage3} alt="Third" />
              </div>
            </div>
          </div>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <div className="h-i-w-header-res-box">
                <div className="h-i-w-header-box">
                  <div>
                    <img src={HowItWwrksImage1} alt="fourth" />
                  </div>
                </div>
              </div>
              <h1 className="h-i-w-header-card-heading">
                Explore the Prompt Library
              </h1>
              <p className="h-i-w-header-card-text">
                Browse through an extensive collection of creative and
                functional prompts tailored to fit a myriad of use-cases.
              </p>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <div className="h-i-w-header-res-box">
                <div className="h-i-w-header-box">
                  <div>
                    <img src={HowItWwrksImage2} alt="second" />
                  </div>
                </div>
              </div>
              <h1 className="h-i-w-header-card-heading">Select And Faceswap</h1>
              <p className="h-i-w-header-card-text">
                Choose prompts that resonate with you or your ultimate needs.
                Then upload your selfie picture to fit your specific tarot cards
                artworks, and can Customize them individually to fit your
                specific requirements.
              </p>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <div className="h-i-w-header-res-box">
                <div className="h-i-w-header-box">
                  <div>
                    <img src={HowItWwrksImage3} alt="Third" />
                  </div>
                </div>
              </div>
              <h1 className="h-i-w-header-card-heading">Print and Order</h1>
              <p className="h-i-w-header-card-text">
                Experience the allure of personalized tarot card artwork with
                ease and confidence. Purchase your bespoke creations today and
                unlock the mysteries of your imagination with each beautifully
                crafted card.
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
      </Grid>
    </div>
  );
};
export default HowItWworks;
