import { createContext, useState, useLayoutEffect } from "react";
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [generatedImages2, setGeneratedImages2] = useState([]);
  const [upscaleImage, setUpscaleImage] = useState("");
  const [editImage, setEditImage] = useState("");
  const [mainImageStack, setMainImageStack] = useState([]);
  const [mainUpscaleImageStack, setMainUpscaleImageStack] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

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
