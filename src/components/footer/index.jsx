import "./index.css";
import Grid from "@mui/material/Grid";
import Twitter from "./../../assets/footer-twitter.svg";
import instagram from "./../../assets/footer-instagram.svg";
import Discard from "./../../assets/footer-discard.svg";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer-container">
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <div className="footer-pages">
                <button onClick={() => navigate("/contact-us")}>
                  Contact us
                </button>
                <button>User guide</button>
                <button>Terms of Service</button>
                <button style={{ marginRight: "0px" }}>Privacy Policy</button>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
              <div className="footer-social-main">
                <a
                  href="https://www.w3schools.com/css/css_rwd_mediaqueries.asp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Twitter} alt="twitter" />
                </a>
                <a
                  href="https://www.w3schools.com/css/css_rwd_mediaqueries.asp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instagram} alt="Instagram" />
                </a>
                <a
                  href="https://www.w3schools.com/css/css_rwd_mediaqueries.asp"
                  target="_blank"
                  style={{ marginRight: "0px" }}
                  rel="noreferrer"
                >
                  <img src={Discard} alt="discord" />
                </a>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
      </Grid>
    </div>
  );
};
export default Footer;
