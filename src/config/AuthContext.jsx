/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [selectedGender, setSelectedGender] = useState("Male");
  const [fetchPrompts, setFetchPrompts] = useState([]);
  const [selectedPrompts, setSelectedPrompts] = useState([]);
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState({
    status: false,
    message: "",
  });
  const [mainImage, setMainImage] = useState(
    "https://placeholder.pics/svg/300x500/6A0D72-9549B4/FFFFFF-6F1575/Start%20Magic!",
  );

  const [Ethnicity, setEthnicity] = useState([
    {
      title: "Caucasians",
      selected: true,
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
      setMainImage(data[0].uri);
      setProgress({ status: false, message: "" });
      toast.success("Image Generated Successfully");
    },
    onError: (error) => {
      console.error("Mutation error:", error);
      setProgress({ status: false, message: "" });
      toast.error("Error occurred while generating image");
    },
  });

  const value = {
    selectedIndex,
    selectedGender,
    setSelectedGender,
    setSelectedIndex,
    fetchMutation,
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
    progress,
    setProgress,
    fetchPrompts,
    setFetchPrompts,
    index,
    setIndex,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
