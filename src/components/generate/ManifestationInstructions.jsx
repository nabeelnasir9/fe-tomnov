import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { MdExpandMore } from "react-icons/md";

const ManifestationInstructions = () => (
  <div className="font-inter">
    <Accordion
      style={{
        backgroundColor: "transparent",
        color: "white",
        marginBottom: "30px",
        boxShadow: "none",
        border: "none",
        width: "100%",
        padding: "0",
      }}
    >
      <AccordionSummary
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <Typography
          variant="h5"
          component="div"
          style={{
            color: "white",
            fontWeight: "bolder",
            borderBottom: "2px solid #9432C3",
            maxWidth: "350px",
            display: "flex",
            alignItems: "center",
          }}
          className="tomnov-generate-left-heading"
        >
          Manifestation Instructions
          <MdExpandMore size={30} style={{ color: "white" }} />
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography style={{ color: "white", marginBottom: "10px" }}>
          We will guide you through the magical manifestation process one card
          at a time for all 22 major arcana cards.
        </Typography>
        <Typography style={{ color: "white", fontWeight: "bolder" }}>
          To Manifest a Card:
        </Typography>
        <Typography style={{ color: "white" }}>
          - First select the Gender and Ethnicity desired for the card
          character.
        </Typography>
        <Typography style={{ color: "white" }}>
          - Then select which card to manifest.
        </Typography>
        <Typography style={{ color: "white" }}>
          - During manifestation please be patient. We are channeling your
          magic.
        </Typography>
        <Typography style={{ color: "white", marginBottom: "10px" }}>
          - After manifesting the results, please click on the image to proceed
          with customization.
        </Typography>
        <Typography style={{ color: "white", fontWeight: "bolder" }}>
          Important Note:
        </Typography>
        <Typography style={{ color: "white" }}>
          Manifesting 22 Cards in your results area is mandatory to proceed with
          ordering your complete tarot deck. The additional 64 minor arcana will
          be manifested for you automatically.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </div>
);

export default ManifestationInstructions;
