import React, { useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components";
import { AuthContext } from "../../config/AuthContext";
import { useQuery } from "@tanstack/react-query";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import "./index.css";

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
  const [selectedPrompts, setSelectedPrompts] = useState([]);

  const GenderList = ["Male", "Female", "Other"];

  const handleEthnicitySelection = (index) => {
    const updatedEthnicity = Ethnicity.map((item, i) => {
      if (i === index) {
        return { ...item, selected: true };
      } else {
        return { ...item, selected: false };
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
      prompts: selectedPrompts,
    });
  };

  const fetchPrompts = useQuery({
    queryKey: ["prompts"],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/generate/get-prompts`,
      );
      return response.data;
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  // const handlePromptSelection = (prompt) => {
  //   setSelectedPrompts((prevSelectedPrompts) => {
  //     if (prevSelectedPrompts.some((p) => p._id === prompt._id)) {
  //       return prevSelectedPrompts.filter((p) => p._id !== prompt._id);
  //     } else {
  //       return [...prevSelectedPrompts, prompt];
  //     }
  //   });
  // };
  //
  const handlePromptSelection = (prompt) => {
    setSelectedPrompts([prompt]); // Set selected prompt as an array with only one element
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
                {GenderList.map((v, i) => (
                  <div key={i} onClick={() => setSelectedGender(v)}>
                    <div>
                      {v === selectedGender && (
                        <div className="tomnov-generate-radio" />
                      )}
                    </div>
                    {v}
                  </div>
                ))}
              </div>
              <h4 className="tomnov-generate-left-title">Ethnicity</h4>
              <div className="tomnov-generate-checkbox-main">
                {Ethnicity.map((v, i) => (
                  <div key={i} onClick={() => handleEthnicitySelection(i)}>
                    <div>
                      {v.selected && <FaCheck color="#fff" size={13} />}
                    </div>
                    {v.title}
                  </div>
                ))}
              </div>
              <h1 className="tomnov-generate-left-title mb-5">Prompts</h1>
              <div className="flex flex-wrap gap-5">
                {fetchPrompts.data?.map((prompt, i) => (
                  <div
                    className={`flex mb-3 gap-2 relative`}
                    key={i}
                    onClick={() => handlePromptSelection(prompt)}
                  >
                    <div className="flex-1 w-20 h-20 relative">
                      <img
                        src={prompt.img}
                        className="object-cover w-full h-full rounded-lg"
                        alt="prompt"
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-black/80 opacity-50 rounded-lg"></div>
                      {selectedPrompts.some((p) => p._id === prompt._id) ? (
                        // Render only if prompt is selected
                        <div className="absolute top-0 left-0 w-full h-full bg-purple-800 opacity-50 rounded-lg"></div>
                      ) : null}
                      <h1 className="text-center text-white text-md font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        {i + 1}
                      </h1>
                    </div>
                  </div>
                ))}
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
                    {mainImageStack?.map((v, i) => (
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
                    ))}
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
