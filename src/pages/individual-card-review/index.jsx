import { useContext, useState } from "react";
import toast from "react-hot-toast";
import Accept from "../../components/dropzone/index";
import axios from "axios";
import { Navbar } from "../../components";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { AuthContext } from "../../config/AuthContext";

const IndividualCardReview = () => {
  const {
    upscaleImage,
    editImage,
    setEditImage,
    sourceImg,
    selectedGender,
    ethnicityString,
  } = useContext(AuthContext);

  const [input, setInput] = useState("");
  const [progress, setProgress] = useState(false);
  const navigate = useNavigate();

  const handleTextareaChange = (event) => {
    setInput(event.target.value);
  };

  const fetchImage = async () => {
    setProgress(true);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/generate/edit",
        {
          imgUrl: upscaleImage.uri,
          prompt: `${input}.The subject is a ${selectedGender} of ${ethnicityString} ethnicity.fullshot + photorealistic details + tarot card. --ar 1:2 --style raw --iw 1`,
        },
      );
      setEditImage(response.data);
      console.log("Response", response);
      setProgress(false);
    } catch (error) {
      console.log(error);
      toast.error("Error occurred. Reload and try again.");
    }
  };
  const faceSwap = async () => {
    setProgress(true);
    const image = editImage.uri || upscaleImage.uri;
    console.log("Faceswap Image", image);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/generate/faceswap",
        {
          target: image,
          source: sourceImg,
        },
      );
      setEditImage({ uri: response.data.uri });

      console.log("Face swap response", response);
      setProgress(false);
    } catch (error) {
      console.log(error);
      toast.error("Error Occurred.Reload and try again.");
    }
  };
  const addSelectedImage = async () => {
    setProgress(true);
    const url = "http://localhost:3001/api/auth/selected";
    const email = localStorage.getItem("email");
    const image = editImage.uri || upscaleImage.uri;
    console.log("addSelectedImage", image);
    try {
      await axios.post(url, { email, image });
      toast.success("Image added to account!");
      setProgress(false);
    } catch (error) {
      toast.error("Error Occurred.Reload and try again.");
      console.error("Error adding selected image:", error.message);
    }
  };
  async function checkAndAddUrl() {
    try {
      const url = "http://localhost:3001/api/auth/check";
      const email = localStorage.getItem("email");
      const image = editImage.uri || upscaleImage.uri;
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
      toast.error("Error Occurred.Reload and try again.");
      console.error("Error:", error);
    }
  }

  return (
    <div className="tomnov-generate-container">
      <Navbar margin={true} />
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
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

              <Accept />
              <div className="ind-card-rev-reg-button-main">
                <button
                  className="ind-card-rev-confirm-button"
                  disabled={progress}
                  onClick={() => faceSwap()}
                >
                  Face Swap
                </button>
                <button
                  className="ind-card-rev-confirm-button"
                  disabled={progress}
                  onClick={() => fetchImage()}
                >
                  <div>Generate</div>
                </button>
                <button
                  className="ind-card-rev-reg-button"
                  disabled={progress}
                  onClick={async () => {
                    await checkAndAddUrl();
                    navigate("/order");
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
                  <button
                    className="ind-card-rev-reg-button"
                    disabled={progress}
                    onClick={() => addSelectedImage()}
                  >
                    <div>Add to Cart</div>
                  </button>
                </div>
                <div className="ind-card-rev-image-main">
                  {editImage && editImage.uri ? (
                    <img src={editImage.uri} alt="" />
                  ) : (
                    <img src={upscaleImage.uri} alt="" />
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
