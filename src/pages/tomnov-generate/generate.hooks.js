import { useCallback, useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../config/AuthContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useGenerate = () => {
  const {
    fetchMutation,
    addMutation,
    selectedGender,
    ethnicityString,
    setSelectedGender,
    Ethnicity,
    setEthnicity,
    sourceImg,
    mainImage,
    setMainImage,
    selectedPrompts,
    setSelectedPrompts,
  } = useContext(AuthContext);
  const [input, setInput] = useState("");
  const [progress, setProgress] = useState({
    status: false,
    message: "",
  });
  const GenderList = ["Male", "Female", "Other"];

  /** @type [INFO: Prompt Editor] */
  const fetchImage = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/generate/edit`,
        {
          imgUrl: mainImage,
          prompt: `${input}.The subject is a ${selectedGender} of ${ethnicityString} ethnicity.fullshot + photorealistic details + tarot card. --ar 1:2 --style raw --iw 1`,
        },
      );
      setMainImage(response.data);
      console.log("Response", response);
    } catch (error) {
      console.log(error);
      toast.error("Error occurred. Reload and try again.");
    } finally {
      setProgress({
        status: false,
        message: "",
      });
    }
  };

  /** @type [INFO: Face Swap] */
  const faceSwap = async () => {
    if (sourceImg === "") {
      toast.error("Please upload your selfie first.");
      return;
    }
    setProgress({
      status: true,
      message: "Face Swap in Progress...",
    });
    const image = mainImage;
    console.log("Faceswap Image", image);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/generate/faceswap`,
        {
          target: image,
          source: sourceImg,
        },
      );
      setMainImage({ uri: response.data.uri });
      console.log("Face swap response", response);
    } catch (error) {
      console.log(error);
      toast.error("Error Occurred.Reload and try again.");
    } finally {
      setProgress({
        status: false,
        message: "",
      });
    }
  };

  /** @type [INFO: Add to Cart] */
  const addSelectedImage = async () => {
    setProgress({
      status: true,
      message: "Generating Please Be Patient...",
    });
    const image = mainImage;
    addMutation.mutate(image);
    setProgress({
      status: false,
      message: "",
    });
  };

  /**
   *
   * @class
   * @classdesc [INFO: Check and Add to Cart]
   */
  async function checkAndAddUrl() {
    try {
      const url = `${import.meta.env.VITE_SERVER_URL}/api/auth/selected`;
      const email = localStorage.getItem("email");
      const image = mainImage;
      const response = await axios.post(url, { email: email, image: image });
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      const data = response.data;
      if (!data.exists) {
        console.log("URL does not exist in selectedImages, adding...");
      } else {
        console.log("URL already exists in selectedImages");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleEthnicitySelection = (index) => {
    const updatedEthnicity = Ethnicity.map((item, i) => {
      if (i === index) {
        return { ...item, selected: true };
      } else {
        return { ...item, selected: false };
      }
    });
    setEthnicity(updatedEthnicity);
  };

  const handleGenerate = () => {
    const selectedEthnicities = Ethnicity.filter((item) => item.selected).map(
      (item) => item.title,
    );
    const ethnicityString = selectedEthnicities.join(", ");
    console.log("selectedPrompts in handleGenerate", selectedPrompts); // Log the selected prompts

    fetchMutation.mutate({
      ethnicity: ethnicityString,
      gender: selectedGender,
      prompts: selectedPrompts[0],
    });
  };

  const fetchPrompts = useQuery({
    queryKey: ["prompts"],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/generate/get-prompts`,
      );
      return response.data;
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handlePromptSelection = useCallback(
    (prompt) => {
      // WARNING: DO NOT REMOVE THE prevSelectedPrompts ARGUMENT
      // eslint-disable-next-line no-unused-vars
      setSelectedPrompts((_prevSelectedPrompts) => {
        const updatedPrompts = [prompt];
        console.log("selectedPrompts after selection", updatedPrompts);
        return updatedPrompts;
      });
    },
    [setSelectedPrompts],
  );

  return {
    GenderList,
    handleEthnicitySelection,
    handleGenerate,
    fetchPrompts,
    handlePromptSelection,
    selectedGender,
    setSelectedGender,
    selectedPrompts,
    setSelectedPrompts,
    fetchMutation,
    Ethnicity,
    input,
    setInput,
    progress,
    fetchImage,
    faceSwap,
    addSelectedImage,
    checkAndAddUrl,
    mainImage,
  };
};

export default useGenerate;
