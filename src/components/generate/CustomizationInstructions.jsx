/* eslint-disable react/no-unescaped-entities */
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { MdExpandMore } from "react-icons/md";

const CustomizationInstructions = () => (
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
          component="div"
          variant="h5"
          style={{
            color: "white",
            fontWeight: "bolder",
            borderBottom: "2px solid #9432C3",
            maxWidth: "350px",
            display: "flex",
            alignItems: "center",
          }}
        >
          Customization Instructions
          <MdExpandMore size={30} style={{ color: "white" }} />
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography style={{ color: "white", fontWeight: "bolder" }}>
          Magic Prompt:
        </Typography>
        <Typography style={{ color: "white", marginBottom: "10px" }}>
          - If you have a specific idea for customizing the manifestation, you
          can add some text to convey your idea in the magic prompt area.
        </Typography>
        <Typography style={{ color: "white", marginBottom: "10px" }}>
          - For example, if you are working on the Magician card and would like
          the character to be wearing a magic necklace, type the words "magic
          necklace" into the magic prompt area and select APPLY.
        </Typography>
        <Typography style={{ color: "white", marginBottom: "10px" }}>
          - This will effectively remix the initial manifestation to incorporate
          your idea. This is a beta version so results may vary and the original
          design may be slightly altered.
        </Typography>
        <Typography style={{ color: "white", marginBottom: "20px" }}>
          - Magic Prompt: If you have a specific idea for customizing the
          manifestation, you can add some text to convey your idea in the magic
          prompt area. For example, if you are working on the Magician card and
          would like the character to be wearing a magic necklace, type the
          words "magic necklace" into the magic prompt area and select APPLY.
          This will effectively remix the initial manifestation to incorporate
          your idea. This is a beta version so results may vary and the original
          design may be slightly altered.
        </Typography>
        <Typography style={{ color: "white", fontWeight: "bolder" }}>
          Face Swap:
        </Typography>
        <Typography style={{ color: "white" }}>
          - You can also try using the faceswap feature. This allows you to
          upload a selfie of yourself or any person. The face from the uploaded
          photo will be swapped onto the character showing in the manifestation
          area.
        </Typography>
        <Typography style={{ color: "white", marginBottom: "20px" }}>
          - After uploading your photo, please wait for the confirmation message
          that your image has been uploaded. Then select SWAP.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </div>
);

export default CustomizationInstructions;
