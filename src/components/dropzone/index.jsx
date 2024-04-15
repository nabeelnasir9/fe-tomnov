import GenerateIcon from "./../../assets/generate.svg";
import { useDropzone } from "react-dropzone";
import { useEffect, useState, useContext } from "react";
import "./index.css";
import { AuthContext } from "../../config/AuthContext";
import toast from "react-hot-toast";

export default function Accept() {
  const { setsourceImg } = useContext(AuthContext);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    maxFiles: 1,
    accept: {
      "image/*": [".jpeg", ".png"],
    },
    onDrop: (acceptedFiles, fileRejections) => {
      if (fileRejections.length > 0) {
        toast.error("Unsupported file type");
        console.log("Rejected files:", fileRejections);
      } else {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            }),
          ),
        );
        const apiKey = import.meta.env.VITE_BB_API_KEY;
        const imageFile = acceptedFiles[0];
        const formData = new FormData();
        formData.append("image", imageFile);
        setUploading(true);
        fetch("https://api.imgbb.com/1/upload?key=" + apiKey, {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            toast.success("Image uploaded successfully");
            console.log("Uploaded image URL:", data.data.url);
            setsourceImg(data.data.url);
          })
          .catch((error) => {
            toast.error("Error uploading Image!");
            console.error("Error uploading image to imgbb:", error);
          })
          .finally(() => {
            setUploading(false);
          });
      }
    },
  });
  const uploadText = uploading ? (
    <span>Uploading...</span>
  ) : (
    <div className="upload-text">
      <p>
        Drop image here or <p className="browse-file">Browse files</p>
      </p>
    </div>
  );

  const thumbs = files.map((file) => (
    <div className="thumb" key={file.name}>
      <div className="thumb-inner">
        <img
          src={file.preview}
          className="img"
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <h4 className="tomnov-generate-left-title">Swap Images</h4>
        <label className="tomnov-generate-upload-button">
          <input {...getInputProps()} />
          <img src={GenerateIcon} alt="icon" />
          {isDragAccept && <p>Supported</p>}
          {isDragReject && <p>That doesn&apos;t look like an image 😕</p>}
          {!isDragActive && (
            <div className="upload-text">
              <p>{uploadText}</p>
            </div>
          )}
        </label>
        <aside className="thumb-container">{thumbs}</aside>
      </div>
    </div>
  );
}
