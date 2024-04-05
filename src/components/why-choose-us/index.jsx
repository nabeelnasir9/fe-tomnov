import Grid from "@mui/material/Grid";
import "./index.css";
import WhyChooseUsImage from "./../../assets/why-choose-us.png";
import Arrow from "./../../assets/arrow.svg";
const WhyChooseUs = () => {
  return (
    <div className="w-c-us-container">
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={6} lg={5} xl={5}>
              <h1 className="w-c-us-heading">Why choose us?</h1>
              <p className="w-c-us-text">
                Embark on a creative journey with VibePrompts, where each card
                is a key to unlocking your imagination. Dive into a world of
                symbols and colors, where every stroke of the brush sparks
                inspiration. Let our platform be your canvas, blending tarot
                magic with endless creativity. Explore freely as fate and cards
                guide your artistic path.
              </p>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={7} xl={7}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
      </Grid>
      <div className="w-c-us-image-main">
        <Grid container spacing={0}>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
            <div className="w-c-us-arrow-image-main">
              <div>
                <img src={Arrow} className="w-c-us-arrow-image" alt="arrow" />
              </div>
            </div>
          </Grid>
          <Grid item xs={1} sm={1} md={2} lg={2} xl={2}></Grid>
          <Grid item xs={9} sm={9} md={8} lg={8} xl={8}></Grid>
          <img src={WhyChooseUsImage} className="w-c-us-image" alt="arrow" />
        </Grid>
      </div>
    </div>
  );
};
export default WhyChooseUs;
