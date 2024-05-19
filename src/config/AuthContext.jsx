import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
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
        toast.success("Image added to account!");
      } catch (error) {
        console.log(error);
        toast.error("Error Occurred.Reload and try again.");
      }
    },
    onSuccess: () => {
      toast.success("Image added to account!");
    },
    onError: (error) => {
      console.error("Mutation error:", error);
      toast.error("Error occurred while adding image");
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
            prompts: data.prompts,
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
      setGeneratedImages2((prevData) => [...prevData, ...data]);
      setMainImageStack((prevData) => [...prevData, ...data]);
      console.log(mainImageStack);
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
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
