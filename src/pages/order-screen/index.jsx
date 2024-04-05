import Grid from "@mui/material/Grid";
import { useContext, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components";
import { AuthContext } from "../../config/AuthContext";
import "./index.css";

const FinalScreen = () => {
  const { mainUpscaleImageStack, setUpscaleImage } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="tomnov-generate-container">
      <Navbar margin={true} />
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <div className="tomnov-generate-right-section">
                <div className="tomnov-generate-right-section-header">
                  <h1>Results</h1>
                  <div>
                    <button
                      className="tomnov-generate-print-button"
                      onClick={() => {
                        navigate("/tomnov-generate");
                        setUpscaleImage("");
                      }}
                    >
                      Regenrate
                    </button>
                    <button
                      className="tomnov-generate-print-button"
                      onClick={() => navigate("/account")}
                    >
                      Print and Order
                    </button>
                  </div>
                </div>
                <div className="tomnov-generate-image-container">
                  <Grid container spacing={3}>
                    {mainUpscaleImageStack?.map((v, i) => {
                      return (
                        <Grid item key={i} xs={4} sm={3} md={4} lg={4} xl={3}>
                          <img src={v?.uri} alt="" />
                        </Grid>
                      );
                    })}
                  </Grid>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
      </Grid>
    </div>
  );
};
export default FinalScreen;
