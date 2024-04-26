import { createContext, useState } from "react";
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [selectedGender, setSelectedGender] = useState("Male");
  const [Ethnicity, setEthnicity] = useState([
    {
      title: "Caucasians",
      selected: false,
    },
    {
      title: "Black",
      selected: false,
    },
    {
      title: "Latina/Hispanic",
      selected: false,
    },
  ]);
  const selectedEthnicities = Ethnicity.filter((item) => item.selected).map(
    (item) => item.title,
  );
  const ethnicityString = selectedEthnicities.join(", ");
  const [generatedImages2, setGeneratedImages2] = useState([]);
  const [upscaleImage, setUpscaleImage] = useState("");
  const [upscaleImage2, setUpscaleImage2] = useState("");
  const [editImage, setEditImage] = useState("");
  const [mainImageStack, setMainImageStack] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sourceImg, setsourceImg] = useState("");

  const value = {
    selectedIndex,
    upscaleImage,
    upscaleImage2,
    selectedGender,
    setSelectedGender,
    setSelectedIndex,
    mainImageStack,
    setMainImageStack,
    editImage,
    setEditImage,
    setUpscaleImage,
    setUpscaleImage2,
    generatedImages2,
    setGeneratedImages2,
    Ethnicity,
    setEthnicity,
    ethnicityString,
    sourceImg,
    setsourceImg,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
