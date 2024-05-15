import Grid from "@mui/material/Grid";
import { RotatingLines } from "react-loader-spinner";
import { useContext, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components";
import { AuthContext } from "../../config/AuthContext";
import "./index.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const TomnovGenerate = () => {
  const {
    fetchMutation,
    selectedGender,
    setSelectedGender,
    mainImageStack,
    Ethnicity,
    setEthnicity,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const GenderList = ["Male", "Female", "Other"];
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

  const handleGenerate = () => {
    const selectedEthnicities = Ethnicity.filter((item) => item.selected).map(
      (item) => item.title,
    );
    const ethnicityString = selectedEthnicities.join(", ");
    fetchMutation.mutate({
      ethnicity: ethnicityString,
      gender: selectedGender,
    });
  };
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
              Generate Instructions:
            </h1>

            {/* Before Generation Instructions */}
            <ListItem>
              <ListItemText>
                <Typography
                  variant="subtitle1"
                  component="div"
                  style={{ color: "white", fontWeight: "bolder" }}
                >
                  Before Generation:
                </Typography>
                <Typography style={{ color: "white" }}>
                  - Selecting the Gender and Ethnicity is mandatory for
                  generating 100% results for you.
                </Typography>
                <Typography style={{ color: "white" }}>
                  - During Generation please be patient. Our Algorithm is
                  creating best results for you.
                </Typography>
              </ListItemText>
            </ListItem>

            {/* After Generation Instructions */}
            <ListItem>
              <ListItemText>
                <Typography
                  variant="subtitle1"
                  component="div"
                  style={{ color: "white", fontWeight: "bolder" }}
                >
                  After Generation:
                </Typography>
                <Typography style={{ color: "white" }}>
                  - After generating the results, please select an image grid
                  you want to proceed with and don’t worry you can choose other
                  results too.
                </Typography>
              </ListItemText>
            </ListItem>
          </List>{" "}
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
                onClick={() => handleGenerate()}
                disabled={fetchMutation.isPending}
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
                    <button
                      className="tomnov-generate-button"
                      onClick={() => navigate("/order")}
                    >
                      <div>Cart</div>
                    </button>
                  </div>
                </div>
                <div className="tomnov-generate-image-container">
                  <Grid container spacing={3}>
                    {fetchMutation.isPending ? (
                      <div className="progress-bar-main">
                        <h1 className="progress-bar-heading">
                          Generating please be patient...
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
                      <> </>
                    )}
                    {mainImageStack?.map((v, i) => {
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
                            <img
                              src={v?.uri}
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
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
      </Grid>
    </div>
  );
};
export default TomnovGenerate;
