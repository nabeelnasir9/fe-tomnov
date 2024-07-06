import Grid from "@mui/material/Grid";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Navbar } from "../../components";
import "./index.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const OrderScreen = () => {
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

  const deleteImage = async (image) => {
    const body = {
      image,
      email,
    };
    const url = `${import.meta.env.VITE_SERVER_URL}/api/auth/delete-cart`;
    await axios.post(url, body);
    setSelectedImages(selectedImages.filter((img) => img !== image));
    images.refetch();
  };

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
      <Grid
        container
        justifyItems={"center"}
        alignItems={"center"}
        spacing={10}
      >
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
        <Grid item xs={12} sm={10} md={10} lg={10} xl={10}>
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
                  variant="h6"
                  component="div"
                  style={{ color: "white", fontWeight: "bolder" }}
                >
                  CONGRATULATIONS!! on reaching the final step.
                </Typography>
                <Typography variant="subtitle1" style={{ color: "white" }}>
                  - Before proceeding with Print & Order. Please review all of
                  the cards in your deck. If you would like to revisit any
                  cards, simply select the card to return to the manifestation
                  and customization page.
                </Typography>
                <Typography variant="subtitle1" style={{ color: "white" }}>
                  - When you are satisfied, proceed to checkout to purchase your
                  custom deck. The entire deck of 78 tarot cards will be shipped
                  to you within 2-4 weeks. The 78 card deck will include the 22
                  major arcana that you manifested and customized as well as 56
                  lesser arcana that we have manifested for you in advance.
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
          <Grid container spacing={4}>
            <div className="tomnov-generate-right-section">
              <div className="tomnov-generate-right-section-header">
                <h1>Total Major Arcana Cards ({images?.data?.length})</h1>
                <div>
                  <button
                    className="tomnov-generate-print-button"
                    onClick={makePayment}
                  >
                    Proceed to Payment
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
                        <div className="image-container">
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
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => deleteImage(v)}
                            style={{ marginTop: "10px" }}
                          >
                            Delete
                          </Button>
                        </div>
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
