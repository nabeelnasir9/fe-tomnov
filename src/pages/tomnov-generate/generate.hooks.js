import { useCallback, useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../config/AuthContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const useGenerate = () => {
  const {
    fetchMutation,
    addMutation,
    index,
    setIndex,
    fetchPrompts,
    setFetchPrompts,
    selectedGender,
    ethnicityString,
    setSelectedGender,
    Ethnicity,
    setEthnicity,
    sourceImg,
    setsourceImg,
    mainImage,
    setMainImage,
    selectedPrompts,
    setSelectedPrompts,
    progress,
    setProgress,
  } = useContext(AuthContext);

  const [input, setInput] = useState("");

  const GenderList = ["Male", "Female", "Other"];

  /** @type [INFO: Prompt Editor] */

  const imageFetch = useMutation({
    mutationKey: ["fetchImage"],
    mutationFn: async () => {
      setMainImage("");
      setProgress({ status: true, message: "Manifesting..." });
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/generate/edit`,
        {
          imgUrl: mainImage,
          prompt: `${input}.The subject is a ${selectedGender} of ${ethnicityString} ethnicity.fullshot + photorealistic details + tarot card. --ar 1:2 --style raw --iw 1`,
        },
      );
      setMainImage(response.data.uri);
    },
    onSuccess: () => {
      setProgress({ status: false, message: "" });
    },
    onError: () => {
      setProgress({ status: false, message: "Error during generation" });
      toast.error("Error occurred. Reload and try again.");
    },
  });

  const fetchImage = async () => {
    imageFetch.mutate();
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
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/generate/faceswap`,
        {
          target: image,
          source: sourceImg,
        },
      );
      setMainImage(response.data.uri);
    } catch (error) {
      toast.error("Error Occurred. Reload and try again.");
    } finally {
      setProgress({
        status: false,
        message: "",
      });
    }
  };

  /** @type [INFO: Add to Cart] */
  const addSelectedImage = async () => {
    if (
      mainImage ===
      "https://placeholder.pics/svg/300x500/6A0D72-9549B4/FFFFFF-6F1575/Start%20Magic!"
    ) {
      toast.error("Please Manifest an Image first");
      return;
    } else {
      addMutation.mutate(mainImage);
      setProgress({
        status: false,
        message: "",
      });
    }
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
      if (
        image ===
        "https://placeholder.pics/svg/300x500/6A0D72-9549B4/FFFFFF-6F1575/Start%20Magic!"
      )
        return;
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

  /** [INFO: Main Function for the first Generation.] */

  const handleGenerate = () => {
    setMainImage("");
    setProgress({
      status: true,
      message: "Manifesting...",
    });
    const selectedEthnicities = Ethnicity.filter((item) => item.selected).map(
      (item) => item.title,
    );
    const ethnicityString = selectedEthnicities.join(", ");

    fetchMutation.mutate({
      ethnicity: ethnicityString,
      gender: selectedGender,
      prompts: selectedPrompts[0],
    });
  };
  const majorArcanaOrder = [
    "The Fool",
    "The Magician",
    "The High Priestess",
    "The Empress",
    "The Emperor",
    "The Hierophant",
    "The Lovers",
    "The Chariot",
    "Strength",
    "The Hermit",
    "Wheel of Fortune",
    "Justice",
    "The Hanged Man",
    "Death",
    "Temperance",
    "The Devil",
    "The Tower",
    "The Star",
    "The Moon",
    "The Sun",
    "Judgement",
    "The World",
  ];
  useQuery({
    queryKey: ["prompts"],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/generate/get-prompts`,
      );
      const data = response.data.map((prompt) => ({
        ...prompt,
        disabled: false,
      }));

      const usedPromptIndices =
        JSON.parse(localStorage.getItem("usedPromptIndices")) || [];
      let updatedData = data.map((prompt, i) =>
        usedPromptIndices.includes(i) ? { ...prompt, disabled: true } : prompt,
      );
      updatedData = updatedData.sort((a, b) => {
        const aIndex = majorArcanaOrder.indexOf(a.text);
        const bIndex = majorArcanaOrder.indexOf(b.text);
        return aIndex - bIndex;
      });

      setFetchPrompts(updatedData);
      return updatedData;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
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

  const handleTextareaChange = (event) => {
    setInput(event.target.value);
  };

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
    handleTextareaChange,
    progress,
    fetchImage,
    faceSwap,
    addSelectedImage,
    checkAndAddUrl,
    mainImage,
    setProgress,
    setFetchPrompts,
    setsourceImg,
    index,
    setIndex,
  };
};

export default useGenerate;
