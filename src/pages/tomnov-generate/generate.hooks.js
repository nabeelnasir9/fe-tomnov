import { useContext, useState } from "react";
import { AuthContext } from "../../config/AuthContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useGenerate = () => {
  const {
    fetchMutation,
    selectedGender,
    setSelectedGender,
    mainImageStack,
    Ethnicity,
    setEthnicity,
  } = useContext(AuthContext);
  const [selectedPrompts, setSelectedPrompts] = useState([]);

  const GenderList = ["Male", "Female", "Other"];

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
    fetchMutation.mutate({
      ethnicity: ethnicityString,
      gender: selectedGender,
      prompts: selectedPrompts,
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

  const handlePromptSelection = (prompt) => {
    setSelectedPrompts([prompt]);
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
    mainImageStack,
    fetchMutation,
    Ethnicity,
  };
};

export default useGenerate;
