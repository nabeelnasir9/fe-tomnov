import Grid from "@mui/material/Grid";
import toast from "react-hot-toast";
import axios from "axios";
import { useContext, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components";
import { AuthContext } from "../../config/AuthContext";
import "./index.css";

const TomnovGenerate = () => {
  const {
    generatedImages2,
    setGeneratedImages2,
    selectedGender,
    setSelectedGender,
    Ethnicity,
    setEthnicity,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const GenderList = ["Male", "Female", "Other"];
  const [progress, setProgress] = useState(false);
  const handleEthnicitySelection = (index) => {
    const updatedEthnicity = Ethnicity.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          selected: true,
        };
      } else {
        return {
          ...item,
          selected: false,
        };
      }
    });
    setEthnicity(updatedEthnicity);
  };
  const fetchData2 = async () => {
    setProgress(true);
    try {
      const selectedEthnicities = Ethnicity.filter((item) => item.selected).map(
        (item) => item.title,
      );

      const ethnicityString = selectedEthnicities.join(", ");
      const response = await axios.post(
        "https://be-tomnonv.onrender.com/api/generate/multi",
        {
          ethnicity: ethnicityString,
          gender: selectedGender,
        },
      );
      setGeneratedImages2(response.data);
      setProgress(false);
    } catch (error) {
      toast.error("Error occurred. Reload and try again.");
      console.error("Error fetching generated images:", error);
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
              <h4 className="tomnov-generate-left-title">Choose Gender</h4>
              <div className="tomnov-generate-radio-main">
                {GenderList.map((v, i) => {
                  return (
                    <div key={i} onClick={() => setSelectedGender(v)}>
                      <div>
                        {v === selectedGender && (
                          <div className="tomnov-generate-radio" />
                        )}
                      </div>
                      {v}
                    </div>
                  );
                })}
              </div>
              <h4 className="tomnov-generate-left-title">Ethnicity</h4>
              <div className="tomnov-generate-checkbox-main">
                {Ethnicity.map((v, i) => {
                  return (
                    <div key={i} onClick={() => handleEthnicitySelection(i)}>
                      <div>
                        {v.selected && <FaCheck color="#fff" size={13} />}
                      </div>
                      {v.title}
                    </div>
                  );
                })}
              </div>
              <button
                onClick={() => fetchData2()}
                disabled={progress}
                className="big-button"
              >
                Generate Cards
              </button>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <div className="tomnov-generate-right-section">
                <div className="tomnov-generate-right-section-header">
                  <h1>Results</h1>
                  <div>
                    {/* <button className="tomnov-generate-button"> */}
                    {/*   <div>Regenerate</div> */}
                    {/* </button> */}
                    {/* <button */}
                    {/*   className="tomnov-generate-print-button" */}
                    {/*   onClick={() => navigate("/account")} */}
                    {/* > */}
                    {/*   Print and Order */}
                    {/* </button> */}
                  </div>
                </div>
                <div className="tomnov-generate-image-container">
                  <Grid container spacing={3}>
                    {progress ? (
                      <div className="progress-bar-main">
                        <h1 className="progress-bar-heading">
                          Generating please be patient...
                        </h1>
                      </div>
                    ) : (
                      <> </>
                    )}
                    {generatedImages2?.map((v, i) => {
                      return (
                        <Grid item key={i} xs={4} sm={3} md={4} lg={4} xl={3}>
                          <button
                            className="tomnov-generate-image-mian"
                            onClick={() =>
                              navigate("/upscale", {
                                state: { index: i },
                              })
                            }
                          >
                            <img src={v?.uri} alt="icon" />
                          </button>
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
export default TomnovGenerate;
