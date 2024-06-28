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
              <h1 className="h-i-w-header-card-heading">Manifest</h1>
              <p className="h-i-w-header-card-text">
                Call forth your cards purpose,look and feel
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
              <h1 className="h-i-w-header-card-heading">Customize</h1>
              <p className="h-i-w-header-card-text">
                Upload your face add some flair
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
              <h1 className="h-i-w-header-card-heading">Purchase</h1>
              <p className="h-i-w-header-card-text">Add to cart and checkout</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
      </Grid>
    </div>
  );
};
export default HowItWworks;
