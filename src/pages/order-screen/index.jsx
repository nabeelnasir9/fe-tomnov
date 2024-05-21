import Grid from "@mui/material/Grid";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components";
import { AuthContext } from "../../config/AuthContext";
import "./index.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const OrderScreen = () => {
  const { setUpscaleImage } = useContext(AuthContext);
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState([]);
  const email = localStorage.getItem("email");
  const images = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const url = `${import.meta.env.VITE_SERVER_URL}/api/auth/cart`;
      const response = await axios.post(url, { email });
      return response.data.images;
    },
    refetchOnMount: "always",
  });

  /** [FIX: change to 22] */
  const makePayment = async () => {
    if (selectedImages.length !== 22) {
      alert("22 cards are required to make a deck and place the order.");
      return;
    }
    const body = {
      images: selectedImages,
      userEmail: email,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/auth/payment`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      },
    );
    const session = await response.json();
    window.location.href = session.url;
  };

  const handleImageSelect = (image) => {
    const isSelected = selectedImages.includes(image);
    if (isSelected) {
      setSelectedImages(selectedImages.filter((img) => img !== image));
    } else {
      setSelectedImages([...selectedImages, image]);
    }
  };

  return (
    <div className="tomnov-generate-container">
      <Navbar margin={true} />
      <Grid container spacing={10}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <List style={{ marginBottom: "50px" }}>
            <h1
              style={{
                color: "white",
                borderBottom: "2px solid #9432C3",
                maxWidth: "280px",
                fontWeight: "bolder",
              }}
              className="tomnov-generate-left-heading"
            >
              Order Instructions:
            </h1>

            {/* Before Generation Instructions */}
            <ListItem>
              <ListItemText>
                <Typography
                  variant="subtitle1"
                  component="div"
                  style={{ color: "white", fontWeight: "bolder" }}
                >
                  CONGRATULATIONS!! on reaching the final step.
                </Typography>
                <Typography style={{ color: "white" }}>
                  - Before proceeding with Print & Order. Please first click on
                  the images you want to proceed with. We have included this for
                  the security convenience.
                </Typography>
                <Typography style={{ color: "white" }}>
                  - After selecting the images you will see border around it. It
                  means you are good to go and proceed with the images.
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
          <Grid container spacing={4}>
            <div className="tomnov-generate-right-section">
              <div className="tomnov-generate-right-section-header">
                <h1>Total ({images?.data?.length})</h1>
                <div>
                  <button
                    className="tomnov-generate-print-button"
                    onClick={() => {
                      navigate("/tomnov-generate");
                      setUpscaleImage("");
                    }}
                  >
                    Regenerate
                  </button>
                  <button
                    className="tomnov-generate-print-button"
                    onClick={makePayment}
                  >
                    Print and Order
                  </button>
                </div>
              </div>
              <div className="tomnov-generate-image-container">
                <Grid container spacing={3}>
                  {images?.data?.map((v, i) => {
                    const isSelected = selectedImages.includes(v);
                    return (
                      <Grid
                        item
                        key={i}
                        xs={4}
                        sm={3}
                        md={4}
                        lg={4}
                        xl={3}
                        className="animate-fade"
                      >
                        <button
                          className={`tomnov-generate-image-mian ${
                            isSelected ? "selected" : ""
                          }`}
                          onClick={() => handleImageSelect(v)}
                        >
                          <img
                            src={v}
                            alt="icon"
                            onContextMenu={(e) => e.preventDefault()}
                          />
                        </button>
                      </Grid>
                    );
                  })}
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
      </Grid>
    </div>
  );
};

export default OrderScreen;
