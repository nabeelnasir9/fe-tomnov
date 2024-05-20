import Grid from "@mui/material/Grid";
import BenefitsImage from "./../../assets/benefits.png";
import "./index.css";
const Benefits = () => {
  return (
    <div className="benefits-container">
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
        <Grid xs={10} sm={10} md={10} lg={10} xl={10}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
              <p className="benefits-title">BENEFITS</p>
              <h1 className="benefits-heading">
                Save time and Usage Limits with the best AI prompts on the
                Market
              </h1>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <div className="benefits-image-main">
                <img src={BenefitsImage} alt="Benefits" />
              </div>
            </Grid>
          </Grid>
          <div className="benefits-card-container">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <div className="benefits-card-box">EXPLORE</div>
                <div className="benefits-card">
                  <h1>Unearth Creative A.I. Gems Across Various Niches</h1>
                  <p>
                    We've curated an exceptional selection of A.I. prompts
                    tailored to serve a wide range of creative, academic, and
                    business needs. With diverse A.I. models at your disposal,
                    finding the right prompt becomes a delightful experience.
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <div className="benefits-card-box">SELECT</div>
                <div className="benefits-card">
                  <h1>Intuitive, Seamless, and Hassle-Free</h1>
                  <p>
                    Leveraging cutting-edge technology, our platform simplifies
                    the process of picking and customizing your A.I. prompt. No
                    more tedious searching; our user-friendly interface ensures
                    a smooth and efficient experience from start to finish.
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <div className="benefits-card-box">THRIVE</div>
                <div className="benefits-card">
                  <h1>
                    Unlock Limitless Possibilities and Elevate Your Projects
                  </h1>
                  <p>
                    With prompts powered by some of the most advanced A.I.
                    models, you can elevate your projects to new heights. Our
                    platform has already helped countless users achieve their
                    creative and professional goals. Now it's your turn to
                    thrive.
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
      </Grid>
    </div>
  );
};
export default Benefits;
