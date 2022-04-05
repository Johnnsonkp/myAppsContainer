import React, { useRef, useState } from "react";

export const FileUploaderComponent = ({ onFileSelect }) => {
  const fileInput = useRef(null);
  const [formData, setFormData] = useState(null);

  const handleFileInput = (e) => {
    onFileSelect(e.target.files[0]);
  };

  formData.append("file", onFileSelect);
  formData.append("upload_preset", "my-uploads");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dcssugmik/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());

    console.log("data", data);
  };

  return (
    <div className="file-uploader">
      <input type="file" onChange={(e) => handleFileInput(e)} />
      <button
        // onClick={(e) => fileInput.current && fileInput.current.click()}
        onClick={(e) => handleOnSubmit(e)}
        className="btn btn-primary"
      >
        Upload image
      </button>
    </div>
  );
};
