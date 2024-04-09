import axios from "axios";
import { useState } from "react";
export default function Test() {
  const [img, setimg] = useState("");
  const faceSwap = async () => {
    const source =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWHXlGJ_r6d7zLbXShOtvK7GxT9V7cSL8tRqojtZ2g_ObMvzgG";
    const target =
      "https://i.ibb.co/1JBzZPf/pexels-andrea-piacquadio-774909.jpg";
    try {
      const response = await axios.post(
        "http://localhost:3001/api/generate/faceswap",
        {
          target: target,
          source: source,
        },
      );
      console.log("Face swap response", response);
      setimg(response.data.output);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ color: "white" }}>
      <h1>Testing</h1>

      <button onClick={faceSwap}>Press</button>
      {img && <img src={img} alt="" />}
    </div>
  );
}
