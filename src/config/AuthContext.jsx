import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [selectedGender, setSelectedGender] = useState("Male");
  const [selectedPrompts, setSelectedPrompts] = useState([]);
  const [mainImage, setMainImage] = useState("");
  useEffect(() => {
    console.log(mainImage.uri);
  }, [mainImage]);

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
    {
      title: "Asian",
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

  const addMutation = useMutation({
    mutationKey: ["addImage"],
    mutationFn: async (image) => {
      try {
        const url = `${import.meta.env.VITE_SERVER_URL}/api/auth/selected`;
        const email = localStorage.getItem("email");
        await axios.post(url, { email, image });
      } catch (error) {
        throw new Error("Network response was not ok");
      }
    },
    onSuccess: () => {
      toast.success("Image added to account!");
    },
    onError: () => {
      toast.error("Already added to account!");
    },
  });

  const fetchMutation = useMutation({
    mutationKey: ["mainstack"],
    mutationFn: async (data) => {
      console.log("fetchMutation", data);
      try {
        const selectedEthnicities = Ethnicity.filter(
          (item) => item.selected,
        ).map((item) => item.title);

        const ethnicityString = selectedEthnicities.join(", ");

        const response = await axios.post(
          `${import.meta.env.VITE_SERVER_URL}/api/generate/multi`,
          {
            prompts: data.prompts.prompt,
            ethnicity: ethnicityString,
            gender: selectedGender,
          },
        );
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: (data) => {
      setMainImage(data[0]);
      toast.success("Image Generated Successfully");
    },
    onError: (error) => {
      console.error("Mutation error:", error);
      toast.error("Error occurred while generating image");
    },
  });
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
    fetchMutation,
    setUpscaleImage2,
    generatedImages2,
    setGeneratedImages2,
    Ethnicity,
    setEthnicity,
    ethnicityString,
    sourceImg,
    addMutation,
    setsourceImg,
    mainImage,
    setMainImage,
    selectedPrompts,
    setSelectedPrompts,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
