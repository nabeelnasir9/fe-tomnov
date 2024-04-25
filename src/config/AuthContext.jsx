import { createContext, useState, useLayoutEffect } from "react";
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
  // const [mainUpscaleImageStack, setMainUpscaleImageStack] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sourceImg, setsourceImg] = useState("");
  // const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  // const [fullName, setFullName] = useState(null);
  // const [userData, setUserData] = useState({});
  //
  // useEffect(() => {
  //   const verifyCookie = async () => {
  //     try {
  //       if (cookies.token) {
  //         const { data } = await axios.post(
  //           `${import.meta.env.VITE_SERVER_URL}/api/user`,
  //           {},
  //           { withCredentials: true },
  //         );
  //         setUserData(data);
  //         const { status, fullName } = data;
  //         if (status) {
  //           setFullName(fullName);
  //         } else {
  //           removeCookie("token");
  //         }
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //
  //   verifyCookie();
  // }, [cookies, fullName, removeCookie]);
  //
  // useLayoutEffect(() => {
  //   console.log("USERDATA", userData);
  // }, [userData]);
  // const logout = async () => {
  //   try {
  //     await axios.post(
  //       `${import.meta.env.VITE_SERVER_URL}/api/user/logout`,
  //       {},
  //       { withCredentials: true },
  //     );
  //     if (cookies.token) {
  //       removeCookie("token");
  //     }
  //     setFullName(null);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useLayoutEffect(() => {
  //   setMainImageStack([generatedImages2]);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [generatedImages2]);

  // useLayoutEffect(() => {
  //   if (editImage != "") {
  //     setMainUpscaleImageStack([editImage]);
  //   }
  // }, [editImage]);

  const value = {
    selectedIndex,
    // logout,
    // setCookie,
    upscaleImage,
    upscaleImage2,
    selectedGender,
    setSelectedGender,
    // mainUpscaleImageStack,
    // setMainUpscaleImageStack,
    setSelectedIndex,
    mainImageStack,
    setMainImageStack,
    editImage,
    // userData,
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

  // console.log(mainUpscaleImageStack, "mainUpscaleImageStack");
  console.log(mainImageStack, "mainImageStack");

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
