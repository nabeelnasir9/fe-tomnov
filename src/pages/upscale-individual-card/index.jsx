import { Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Navbar } from "../../components";
import { AuthContext } from "../../config/AuthContext";
import axios from "axios";
import "./index.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const UpscaleCard = () => {
  const navigate = useNavigate();
  const {
    generatedImages2,
    upscaleImage,
    setEditImage,
    setUpscaleImage,
    setUpscaleImage2,
    selectedIndex,
    setSelectedIndex,
  } = useContext(AuthContext);
  const location = useLocation();
  const [progress, setProgress] = useState(false);

  const selectedImage =
    generatedImages2 &&
    generatedImages2.length > 0 &&
    selectedIndex < generatedImages2.length
      ? generatedImages2[selectedIndex].uri
      : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W";

  const upscaleReq = async (type) => {
    setProgress(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/generate/upscale`,
        {
          messageId: generatedImages2[selectedIndex].task_id,
          upscale: type,
        }
      );
      setUpscaleImage(response.data);
      setUpscaleImage2(response.data);
      setProgress(false);
    } catch (error) {
      console.log(error);
      toast.error("Error Occurred.Reload and try again.");
    }
  };
  const addSelectedImage = async () => {
    const url = `${import.meta.env.VITE_SERVER_URL}/api/auth/selected`;
    const email = localStorage.getItem("email");
    const image = upscaleImage.uri;
    try {
      await axios.post(url, { email, image });
      toast.success("Image added to account!");
    } catch (error) {
      console.log(error);
      toast.error("Error Occurred.Reload and try again.");
    }
  };

  useEffect(() => {
    setSelectedIndex(location.state.index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="tomnov-generate-container">
      <Navbar margin={true} />
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <List style={{ marginBottom: "30px" }}>
            <h1
              style={{
                color: "white",
                borderBottom: "2px solid #9432C3",
                maxWidth: "300px",
                fontWeight: "bolder",
              }}
              className="tomnov-generate-left-heading"
            >
              Upscale Instructions:
            </h1>

            {/* Before Generation Instructions */}
            <ListItem>
              <ListItemText>
              <Typography
                  variant="subtitle1"
                  component="div"
                  style={{ color: "white", fontWeight:'bolder' }}
                >
                  Before Upscale:
                </Typography>
                <Typography style={{ color: "white" }}>
                  - There are four buttons that gives you options for selecting
                  one of the image. Click them and have your desired image.
                </Typography>
                <Typography style={{ color: "white" }}>
                  - You are not liking the Results? Do not worry there are next
                  and previous buttons for you.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography
                  variant="subtitle1"
                  component="div"
                  style={{ color: "white", fontWeight:'bolder' }}
                >
                  After Upscale:
                </Typography>
                <Typography style={{ color: "white" }}>
                  - After upscaling your image. You can either select this here as add to cart to save it for later or you can also click on the confirm button to proceed with next step.
                </Typography>
                <Typography style={{ color: "white" }}>
                  - If you are not liking the result? Then click on the regenerate and go back to the previous results.
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
              <h1 className="tomnov-generate-left-heading">
                Upscale Individual Card
              </h1>
              <div className="tomnov-generate-line" />
              <h4 className="tomnov-generate-left-title">
                Select the Card you like the best for Higher Quality
              </h4>
              {!upscaleImage && !upscaleImage.uri && (
                <>
                  <div className="ind-card-up-reg-button-main">
                    <button
                      className="ind-card-up-reg-button"
                      disabled={progress}
                      onClick={() => upscaleReq("1")}
                    >
                      <div>Upscale 1st</div>
                    </button>
                    <button
                      className="ind-card-up-reg-button"
                      disabled={progress}
                      onClick={() => upscaleReq("2")}
                    >
                      <div>Upscale 2nd</div>
                    </button>
                  </div>
                  <div className="ind-card-up-reg-button-main">
                    <button
                      className="ind-card-up-reg-button"
                      disabled={progress}
                      onClick={() => upscaleReq("3")}
                    >
                      <div>Upscale 3rd</div>
                    </button>
                    <button
                      className="ind-card-up-reg-button"
                      disabled={progress}
                      onClick={() => upscaleReq("4")}
                    >
                      <div>Upscale 4th</div>
                    </button>
                  </div>
                </>
              )}
              <div className="confirm-main">
                <button
                  className="ind-card-rev-confirm-button"
                  disabled={progress}
                  onClick={() => {
                    // setGeneratedImages2([]);
                    setUpscaleImage("");
                    setEditImage("");
                    navigate("/individual-card-review");
                  }}
                >
                  Confirm
                </button>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <div className="tomnov-generate-right-section">
                <div className="tomnov-generate-right-section-header">
                  <h1>Upscaled</h1>
                 
                  {upscaleImage && upscaleImage.uri ? (
                    <div>
                      <button
                        className="ind-card-up-reg-button"
                        disabled={progress}
                        onClick={() => addSelectedImage()}
                      >
                        <div>Add to Cart</div>
                      </button>
                      <button
                        className="ind-card-rev-reg-button"
                        disabled={progress}
                        onClick={() => navigate("/tomnov-generate")}
                      >
                        <div>Regenerate</div>
                      </button>
                    </div>
                  ) : (
                    <>
                     <button
                        className="ind-card-up-reg-button"
                        onClick={() => navigate("/tomnov-generate")}
                      >
                        <div>Back</div>
                      </button> </>
                  )}
                </div>
                <div className="ind-card-rev-image-main">
                  {upscaleImage && upscaleImage.uri ? (
                    <img
                      src={upscaleImage.uri}
                      alt="check"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  ) : (
                    <img
                      src={selectedImage}
                      alt="check"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  )}
                </div>

                {!upscaleImage && !upscaleImage.uri && (
                  <div className="ind-card-rev-image-prev-button-main">
                    <button
                      className="ind-card-rev-image-prev-button"
                      onClick={() => {
                        if (selectedIndex === 0) {
                          setSelectedIndex(generatedImages2.length - 1);
                        } else {
                          setSelectedIndex(selectedIndex - 1);
                        }
                        console.log("previous", selectedIndex);
                      }}
                    >
                      <div>Previous</div>
                    </button>
                    <button
                      className="ind-card-rev-image-next-button"
                      onClick={() => {
                        let index = selectedIndex;
                        if (selectedIndex === generatedImages2.length - 1) {
                          setSelectedIndex(0);
                        } else {
                          index++;
                          setSelectedIndex(index);
                        }
                        console.log("next >>>>", selectedIndex);
                      }}
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
      </Grid>
    </div>
  );
};

export default UpscaleCard;
