import { useContext, useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import toast from "react-hot-toast";
import Dropzone from "../../components/dropzone/index";
import axios from "axios";
import { Navbar } from "../../components";
import Grid from "@mui/material/Grid";
import { useNavigate, useLocation } from "react-router-dom";
import "./index.css";
import { AuthContext } from "../../config/AuthContext";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const IndividualCardReview = () => {
  const {
    addMutation,
    selectedIndex,
    setSelectedIndex,
    mainImageStack,
    editImage,
    setEditImage,
    sourceImg,
    selectedGender,
    ethnicityString,
  } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const selectedImage =
    mainImageStack &&
    mainImageStack.length > 0 &&
    selectedIndex < mainImageStack.length
      ? mainImageStack[selectedIndex].uri
      : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W";

  useEffect(() => {
    if (location.state && location.state.index !== undefined) {
      setSelectedIndex(location.state.index);
    }
    console.log("IndividualCardReview selectedIndex: %s", selectedIndex);
  }, [location.state, setSelectedIndex, selectedIndex]);

  const [input, setInput] = useState("");
  const [progress, setProgress] = useState({
    status: false,
    message: "",
  });

  const handleTextareaChange = (event) => {
    setInput(event.target.value);
  };

  const fetchImage = async () => {
    setProgress({
      status: true,
      message: "Generating Please Be Patient...",
    });
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/generate/edit`,
        {
          imgUrl: selectedImage,
          prompt: `${input}.The subject is a ${selectedGender} of ${ethnicityString} ethnicity.fullshot + photorealistic details + tarot card. --ar 1:2 --style raw --iw 1`,
        },
      );
      setEditImage(response.data);
      console.log("Response", response);
    } catch (error) {
      console.log(error);
      toast.error("Error occurred. Reload and try again.");
    } finally {
      setProgress({
        status: false,
        message: "",
      });
    }
  };

  const faceSwap = async () => {
    if (sourceImg === "") {
      toast.error("Please upload your selfie first.");
      return;
    }
    setProgress({
      status: true,
      message: "Face Swap in Progress...",
    });
    const image = editImage.uri || selectedImage;
    console.log("Faceswap Image", image);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/generate/faceswap`,
        {
          target: image,
          source: sourceImg,
        },
      );
      setEditImage({ uri: response.data.uri });
      console.log("Face swap response", response);
    } catch (error) {
      console.log(error);
      toast.error("Error Occurred.Reload and try again.");
    } finally {
      setProgress({
        status: false,
        message: "",
      });
    }
  };

  const addSelectedImage = async () => {
    setProgress({
      status: true,
      message: "Generating Please Be Patient...",
    });
    const image = editImage.uri || selectedImage;
    addMutation.mutate(image);
    setProgress({
      status: false,
      message: "",
    });
  };

  async function checkAndAddUrl() {
    try {
      const url = `${import.meta.env.VITE_SERVER_URL}/api/auth/selected`;
      const email = localStorage.getItem("email");
      const image = editImage.uri || selectedImage;
      const response = await axios.post(url, { email: email, image: image });
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      const data = response.data;
      if (!data.exists) {
        console.log("URL does not exist in selectedImages, adding...");
      } else {
        console.log("URL already exists in selectedImages");
      }
    } catch (error) {
      // toast.error("Image already added to account!");
      console.error("Error:", error);
    }
  }

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
                  style={{
                    color: "white",
                    fontWeight: "bolder",
                    marginBottom: "10px",
                  }}
                >
                  You can use both Prompt Editor & FaceSwap. If you do not want
                  to use one of them then its totally workable. If you do not
                  want any change here, you can directly click on confirm if you
                  have previously click on the Add to Cart button.
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="div"
                  style={{ color: "white", fontWeight: "bolder" }}
                >
                  Prompt Editor:
                </Typography>
                <Typography style={{ color: "white" }}>
                  - Now you have finalized the Tarot card. You can edit the
                  picture. Its a beta version so there will be a slight edge on
                  generation.
                </Typography>
                <Typography style={{ color: "white" }}>
                  - You can write your editing and click on generate button.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography
                  variant="subtitle1"
                  component="div"
                  style={{ color: "white", fontWeight: "bolder" }}
                >
                  Face Swap:
                </Typography>
                <Typography style={{ color: "white" }}>
                  - You can upload your selfie and then click on the face swap
                  button.
                </Typography>
                <Typography style={{ color: "white" }}>
                  - Kindly wait for the message to come that your image is being
                  uploaded.
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
              <h1 className="tomnov-generate-left-heading">
                Make Your Artwork Tarot Card
              </h1>
              <div className="tomnov-generate-line" />
              <h4 className="tomnov-generate-left-title">Prompt Editor</h4>
              <div className="ind-card-rev-textarea">
                <textarea
                  placeholder="Prompt..."
                  value={input}
                  onChange={handleTextareaChange}
                ></textarea>
              </div>
              <Dropzone setProgress={setProgress} />
              <div className="ind-card-rev-reg-button-main">
                <button
                  className="ind-card-rev-confirm-button"
                  disabled={progress.status}
                  onClick={() => faceSwap()}
                >
                  <div>FaceSwap</div>
                </button>
                <button
                  className="ind-card-rev-confirm-button"
                  disabled={progress.status}
                  onClick={() => fetchImage()}
                >
                  <div>Generate</div>
                </button>
                <button
                  className="ind-card-rev-reg-button"
                  disabled={progress.status}
                  onClick={async () => {
                    await checkAndAddUrl();
                    setEditImage("");
                    navigate("/tomnov-generate");
                  }}
                >
                  <div>Confirm</div>
                </button>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <div className="tomnov-generate-right-section">
                <div className="tomnov-generate-right-section-header">
                  <h1>Individual Card Review</h1>
                  <div>
                    <button
                      className="ind-card-rev-reg-button"
                      disabled={progress.status}
                      onClick={() => addSelectedImage()}
                    >
                      <div className="animate-fade">Add To Cart</div>
                    </button>
                    <button
                      className="ind-card-rev-reg-button"
                      disabled={progress.status}
                      onClick={() => navigate("/tomnov-generate")}
                    >
                      <div className="animate-fade">Regenerate</div>
                    </button>
                  </div>
                </div>
                <div className="ind-card-rev-image-main">
                  {progress.status ? (
                    <div className="progress-bar-main animate-fade">
                      <h1 className="lg:text-2xl text-white font-semibold text-base">
                        {progress.message}
                      </h1>
                      <RotatingLines
                        visible={true}
                        height="60"
                        width="60"
                        strokeColor="purple"
                        strokeWidth="5"
                        animationDuration="0.75"
                        ariaLabel="rotating-lines-loading"
                        wrapperClass=""
                      />
                    </div>
                  ) : (
                    <img
                      className="animate-fade"
                      src={editImage.uri || selectedImage}
                      alt="individual-card-review"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  )}
                </div>
              </div>
              <Grid item xs={12} sm={12} md={7} lg={7} xl={7}></Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
      </Grid>
    </div>
  );
};

export default IndividualCardReview;
