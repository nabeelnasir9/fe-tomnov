import { Grid } from "@mui/material";
import Dropzone from "../dropzone";
import useGenerate from "../../pages/tomnov-generate/generate.hooks";

const PromptEditor = () => {
  const { input, progress, handleTextareaChange, fetchImage, setProgress } =
    useGenerate();
  return (
    <Grid item xs={12} sm={12} md={13} lg={13} xl={13}>
      <div className="tomnov-generate-right-section">
        <h1 className="tomnov-generate-left-heading">Customization</h1>
        <div className="tomnov-generate-line" />
        <h4 className="tomnov-generate-left-title">Magic Prompt</h4>
        <div className="flex items-center justify-between">
          <div className="ind-card-rev-textarea">
            <textarea
              placeholder="Prompt..."
              value={input}
              onChange={handleTextareaChange}
            ></textarea>
          </div>
          <button
            className="ind-card-rev-confirm-button"
            disabled={progress.status}
            onClick={() => fetchImage()}
          >
            <div>Generate</div>
          </button>
        </div>
        <Dropzone setProgress={setProgress} />
      </div>
    </Grid>
  );
};

export default PromptEditor;
