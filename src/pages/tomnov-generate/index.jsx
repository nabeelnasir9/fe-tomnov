import Grid from "@mui/material/Grid";
import LeftGenerate from "../../components/generate/LeftGenerate";
import { Navbar } from "../../components";
import ManifestationInstructions from "../../components/generate/ManifestationInstructions";
import RightGenerate from "../../components/generate/RightGenerate";
import "./index.css";
import PromptEditor from "../../components/generate/PromptEditor";
import CustomizationInstructions from "../../components/generate/CustomizationInstructions";

const TomnovGenerate = () => {
  return (
    <div className="tomnov-generate-container">
      <Navbar margin={true} />
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <ManifestationInstructions />
          <CustomizationInstructions />
          <Grid container spacing={8}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <LeftGenerate />
            </Grid>
            <Grid
              item
              xs={12}
              justifyItems={"center"}
              alignItems={"center"}
              sm={6}
              md={6}
              lg={4}
              xl={6}
            >
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <RightGenerate />
                </Grid>
                <Grid item>
                  <PromptEditor />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
      </Grid>
    </div>
  );
};

export default TomnovGenerate;
