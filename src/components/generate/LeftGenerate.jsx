/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import { FaCheck } from "react-icons/fa";
import useGenerate from "../../pages/tomnov-generate/generate.hooks";
import LeftPrompts from "./LeftPrompts";
const LeftGenerate = () => {
  const {
    GenderList,
    handleEthnicitySelection,
    Ethnicity,
    fetchPrompts,
    handlePromptSelection,
    selectedGender,
    setSelectedGender,
    selectedPrompts,
  } = useGenerate();

  return (
    <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
      <h1 className="tomnov-generate-left-heading">Manifest your Tarot Card</h1>
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
            <div>{v.selected && <FaCheck color="#fff" size={13} />}</div>
            {v.title}
          </div>
        ))}
      </div>
      <h1 className="tomnov-generate-left-title mb-5">Prompts</h1>
      <LeftPrompts
        handlePromptSelection={handlePromptSelection}
        selectedPrompts={selectedPrompts}
        fetchPrompts={fetchPrompts}
      />
    </Grid>
  );
};

export default LeftGenerate;
