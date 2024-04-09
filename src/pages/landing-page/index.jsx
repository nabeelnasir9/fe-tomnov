import {
  Navbar,
  FeaturedPrompts,
  Footer,
  HowItWworks,
  Benefits,
  WhyChooseUs,
} from "../../components";
import "./index.css";
import FacebookIcon from "./../../assets/facebook-2.svg";
import RedIcon from "./../../assets/red.svg";
import DiscardIcon from "./../../assets/discard.svg";
import InstagramIcon from "./../../assets/instagram.svg";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar margin={false} />
      <div className="landing-social-secetion">
        <div>
          <button>
            <img src={FacebookIcon} alt="Fb" />
          </button>
          <button>
            <img src={RedIcon} alt="Red" />
          </button>
          <button>
            <img src={DiscardIcon} alt="Dis" />
          </button>
          <button>
            <img src={InstagramIcon} alt="Ins" />
          </button>
        </div>
      </div>
      <div className="landing-header">
        <div className="landing-header-inner">
          <Grid container spacing={0} style={{ height: "100%" }}>
            <Grid item xs={1} sm={1} md={2} lg={2} xl={3}></Grid>
            <Grid item xs={10} sm={10} md={8} lg={8} xl={6}>
              <div className="landing-header-section">
                <div>
                  <h1 className="lan-head-heading">
                    Start generating the tarot cards of <span>your dreams</span>
                  </h1>
                  <p className="lan-head-paragraph">
                    Getting results with A.I. tools like Midjourney can be
                    difficult, time consuming, and expensive. Browse our
                    marketplace of A.I. prompts and purchase them to use for
                    your own projects. Or, use our free prompt generator to
                    create your own prompts from mages.
                  </p>
                </div>
                <div>
                  <div className="prompt-box">
                    <p>
                      Need{" "}
                      <span style={{ fontWeight: 600 }}>Prompt Ideas?</span>
                      <br /> <br /> Try Our New Free Text to Image Tarot Cards
                      Art Generator
                    </p>
                  </div>
                  <div className="prompt-generate-button-main">
                    <button
                      className="prompt-generate-button"
                      onClick={() => navigate("/tomnov-generate")}
                    >
                      Generate
                    </button>
                    <div className="line" />
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={1} sm={1} md={2} lg={2} xl={3}></Grid>
          </Grid>
        </div>
      </div>
      <FeaturedPrompts />
      <Benefits />
      <WhyChooseUs />
      <HowItWworks />
      <Footer />
    </div>
  );
};
export default LandingPage;
