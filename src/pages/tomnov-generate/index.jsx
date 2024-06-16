import Grid from "@mui/material/Grid";
import LeftGenerate from "../../components/generate/LeftGenerate";
import useGenerate from "./generate.hooks";
import { Navbar } from "../../components";
import ManifestationInstructions from "../../components/generate/ManifestationInstructions";
import RightGenerate from "../../components/generate/RightGenerate";
import "./index.css";
import CustomizationInstructions from "../../components/generate/CustomizationInstructions";

const TomnovGenerate = () => {
  const { handleGenerate, fetchMutation, mainImageStack } = useGenerate();

  return (
    <div className="tomnov-generate-container">
      <Navbar margin={true} />
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <ManifestationInstructions />
          <CustomizationInstructions />
          <Grid container spacing={4}>
            <LeftGenerate />
            <RightGenerate
              handleGenerate={handleGenerate}
              mainImageStack={mainImageStack}
              fetchMutation={fetchMutation}
            />
          </Grid>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
      </Grid>
    </div>
  );
};

export default TomnovGenerate;
