import { useContext, useState } from "react";
import axios from "axios";
import { Navbar } from "../../components";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { AuthContext } from "../../config/AuthContext";

const IndividualCardReview = () => {
  const { upscaleImage, editImage, setEditImage } = useContext(AuthContext);
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
          prompt: `https://i.ibb.co/3TR9Vxj/images-1.jpg ${input} .Subject is facing the camera + fullshot + photorealistic details + tarot card. --ar 1:2 --style raw`,
        },
      );
      setEditImage(response.data);
      console.log("Response", response);
      setProgress(false);
    } catch (error) {
      console.log(error);
    }
  };
  const faceSwap = async () => {
    setProgress(true);
    const source = "https://i.ibb.co/2FwZVtw/pexels-engin-akyurt-1642228.jpg";
    try {
      const response = await axios.post(
        "http://localhost:3001/api/generate/faceswap",
        {
          target: editImage.uri,
          source: source,
        },
      );
      setEditImage({ uri: response.data.uri });

      console.log("Face swap response", response);
      setProgress(false);
    } catch (error) {
      console.log(error);
    }
  };

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
              <div className="ind-card-rev-reg-button-main">
                <button
                  className="ind-card-rev-reg-button"
                  onClick={() => fetchImage()}
                >
                  <div>Generate</div>
                </button>

                {/* {editImage && editImage.uri ? ( */}
                <button
                  className="ind-card-rev-confirm-button"
                  disabled={progress}
                  onClick={() => faceSwap()}
                >
                  faceswap
                </button>
                {/* ) : ( */}
                {/*   <> </> */}
                {/* )} */}
                <button
                  className="ind-card-rev-confirm-button"
                  disabled={progress}
                  onClick={() => navigate("/final")}
                >
                  Confirm
                </button>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <div className="tomnov-generate-right-section">
                <div className="tomnov-generate-right-section-header">
                  <h1>Individual Card Review</h1>
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
