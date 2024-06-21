/* eslint-disable react/prop-types */
import Grid from "@mui/material/Grid";
import { RotatingLines } from "react-loader-spinner";
import useGenerate from "../../pages/tomnov-generate/generate.hooks";

const RightGenerate = () => {
  const { mainImage, handleGenerate, addSelectedImage, progress } =
    useGenerate();

  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <div className="tomnov-generate-right-section">
        <div className="tomnov-generate-right-section-header">
          <h1 className="tomnov-generate-left-heading">Manifestation</h1>
          <div>
            <button
              className="ind-card-rev-confirm-button"
              onClick={() => handleGenerate()}
              disabled={progress.status}
            >
              <div className="animate-fade">Manifest</div>
            </button>
            <button
              className="ind-card-rev-reg-button"
              disabled={progress.status}
              onClick={() => addSelectedImage()}
            >
              <div className="animate-fade">Add to Deck</div>
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
              src={mainImage}
              alt="Generate"
              onContextMenu={(e) => e.preventDefault()}
            />
          )}
        </div>
      </div>
    </Grid>
  );
};

export default RightGenerate;
