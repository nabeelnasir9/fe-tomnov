import { createContext, useState, useLayoutEffect } from "react";
import { client } from "@gradio/client";
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [generatedImages2, setGeneratedImages2] = useState([]);
  const [upscaleImage, setUpscaleImage] = useState("");
  const [editImage, setEditImage] = useState("");
  const [mainImageStack, setMainImageStack] = useState([]);
  const [mainUpscaleImageStack, setMainUpscaleImageStack] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const faceSwap = async () => {
    try {
      const response_0 = await fetch("https://i.ibb.co/jhhhd9t/local.png");
      const exampleImage = await response_0.blob();
      console.log(exampleImage);

      const response_1 = await fetch(
        "https://i.ibb.co/2FwZVtw/pexels-engin-akyurt-1642228.jpg",
      );
      const exampleImage2 = await response_1.blob();

      console.log(exampleImage2);
      const app = await client(
        "https://felixrosberg-face-swap.hf.space/--replicas/p7pq1/",
      );
      const result = await app.predict("/run_inference", [
        exampleImage,
        exampleImage2,
        0,
        0,
        ["Compare"],
      ]);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    setMainImageStack([generatedImages2[selectedIndex]]);
  }, [selectedIndex]);

  useLayoutEffect(() => {
    setMainUpscaleImageStack([editImage]);
  }, []);

  const value = {
    selectedIndex,
    upscaleImage,
    mainUpscaleImageStack,
    setMainUpscaleImageStack,
    setSelectedIndex,
    mainImageStack,
    setMainImageStack,
    editImage,
    setEditImage,
    setUpscaleImage,
    generatedImages2,
    setGeneratedImages2,
  };

  console.log(mainUpscaleImageStack, "mainUpscaleImageStack");
  console.log(mainImageStack, "mainImageStack");

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
