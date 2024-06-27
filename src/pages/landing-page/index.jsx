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
import img1 from "../../assets/Home/1.jpeg";
import img2 from "../../assets/Home/2.jpeg";
import img3 from "../../assets/Home/3.jpeg";
import img4 from "../../assets/Home/4.jpeg";
import img5 from "../../assets/Home/5.jpeg";
import img6 from "../../assets/Home/6.jpeg";
import img7 from "../../assets/Home/7.jpeg";
import img8 from "../../assets/Home/8.jpeg";

import RedIcon from "./../../assets/red.svg";
import DiscardIcon from "./../../assets/discard.svg";
import InstagramIcon from "./../../assets/instagram.svg";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();

  const MajorArcana = [
    {
      id: 1,
      image: img1,
    },
    {
      id: 2,
      image: img2,
    },
    {
      id: 3,
      image: img3,
    },
    {
      id: 4,
      image: img4,
    },
  ];
  const MinorArcana = [
    {
      id: 1,
      image: img5,
    },
    {
      id: 2,
      image: img6,
    },
    {
      id: 3,
      image: img7,
    },
    {
      id: 4,
      image: img8,
    },
  ];

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
          <Grid container spacing={0} style={{ height: "100vh" }}>
            <Grid item xs={1} sm={1} md={2} lg={2} xl={3}></Grid>
            <Grid item xs={10} sm={10} md={8} lg={8} xl={6}>
              <div className="landing-header-section">
                <div>
                  <h1 className="lan-head-heading">
                    Start manifesting the tarot cards of{" "}
                    <span>your dreams</span>
                  </h1>
                  <p className="lan-head-paragraph">
                    Synthseer is a magical website that can generate original,
                    customized tarot card art. It uses AI art generators, such
                    as Midjourney, to turn your ideas into pictures. All you
                    need to do is select you style preferences and let the site
                    do the rest.
                  </p>
                  <h1 className="welcome-message">
                    HERE YOU CAN EASILY GENERATE A CUSTOM DECK OF TAROT CARDS
                  </h1>
                  <p className="welcome-para">
                    Allow us to walk you through the design of your 22 major
                    arcana cards. You can use our prompts to get started and
                    tweak the results until you are satisfied. You can further
                    customize the cards with the face swap feature. To complete
                    your deck, choose from a selection of stunning sets of
                    lesser arcana cards. We will ship you an entire deck of
                    unique tarot cards. Click below to get started!
                  </p>
                  <div className="flex justify-center">
                    <button
                      className="prompt-generate-button cursor-pointer"
                      onClick={() => navigate("/tomnov-generate")}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
                <div className="flex justify-center items-center text-white gap-4 flex-col mt-20 font-inter">
                  <p className="text-2xl font-bold uppercase">
                    Example of Major Arcana Cards
                  </p>
                  <div className="flex items-center justify-center">
                    {MajorArcana.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="size-96 object-contain"
                        />
                        <p className="text-sm text-white">{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center items-center text-white gap-4 flex-col mt-20 font-inter">
                  <p className="text-2xl font-bold text-center">
                    THE MINOR ARCANA CARDS HAVE BEEN PREDESIGNED WITH THE BELOW
                    ANIMAL THEMES{" "}
                  </p>
                  <p className="text-xl">
                    STAY TUNED IN THE FUTURE FOR ALTERNATIVE DESIGN OPTIONS
                  </p>
                  <div className="flex items-center justify-center">
                    {MinorArcana.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="size-96 object-contain"
                        />
                        <p className="text-sm text-white">{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* <div> */}
                {/*   <div className="prompt-box"> */}
                {/*     <p> */}
                {/*       Need{" "} */}
                {/*       <span style={{ fontWeight: 600 }}>Prompt Ideas?</span> */}
                {/*       <br /> <br /> Try Our New Free Text to Image Tarot Cards */}
                {/*       Art Generator */}
                {/*     </p> */}
                {/*   </div> */}
                {/*   <div className="prompt-generate-button-main"> */}
                {/*     <button */}
                {/*       className="prompt-generate-button cursor-pointer" */}
                {/*       onClick={() => navigate("/tomnov-generate")} */}
                {/*     > */}
                {/*       Get Started */}
                {/*     </button> */}
                {/*     <div className="line" /> */}
                {/*   </div> */}
                {/* </div> */}
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
