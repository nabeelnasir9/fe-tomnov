import Grid from "@mui/material/Grid";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components";
import { AuthContext } from "../../config/AuthContext";

import "./index.css";

const OrderScreen = () => {
  const { setUpscaleImage } = useContext(AuthContext);
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const addToCart = async () => {
      try {
        const url = "http://localhost:3001/api/auth/cart";
        const email = localStorage.getItem("email");
        const response = await axios.post(url, { email });
        setImages(response.data.images);
        console.log("Selected Images:", response.data.images);
      } catch (error) {
        console.error("Error:", error.response.data.error);
      }
    };
    addToCart();
  }, []);

  return (
    <div className="tomnov-generate-container">
      <Navbar margin={true} />
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <Grid container spacing={4}>
            {/* <Grid item xs={12} sm={12} md={7} lg={7} xl={7}> */}
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
                  {images.map((v, i) => {
                    return (
                      <Grid item key={i} xs={4} sm={3} md={4} lg={4} xl={3}>
                        <button className="tomnov-generate-image-mian">
                          <img src={v} alt="icon" />
                        </button>
                      </Grid>
                    );
                  })}
                </Grid>
              </div>
            </div>
            {/* </Grid> */}
          </Grid>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
      </Grid>
    </div>
  );
};
export default OrderScreen;
