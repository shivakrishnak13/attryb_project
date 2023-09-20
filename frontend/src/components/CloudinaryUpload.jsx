import React, { useEffect } from "react";

const CloudinaryUploadWidget = ({setimageURL}) => {
  useEffect(() => {
    const cloudName = "hzxyensd5"; // replace with your own cloud name
    const uploadPreset = "aoh4fpwm"; // replace with your own upload preset

    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset
        // Add additional options here if needed
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          setimageURL(result.info.secure_url);
        }
      }
    );

    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );

    // Clean up the widget when component is unmounted
    return () => {
      myWidget.destroy();
    };
  }, []); // Empty dependency array to ensure useEffect runs once on mount

  return (
    <button id="upload_widget" className="cloudinary-button">
      Image Upload
    </button>
  );
};

export default CloudinaryUploadWidget;
