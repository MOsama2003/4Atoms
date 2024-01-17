// GalleryContext.js
import React, { createContext, useContext, useState } from "react";

const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [capturedImages, setCapturedImages] = useState([]);

  const addCapturedImage = (image) => {
    setCapturedImages((prevImages) => [...prevImages, image]);
  };

  return (
    <GalleryContext.Provider value={{ capturedImages, addCapturedImage }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGallery = () => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error("useGallery must be used within a GalleryProvider");
  }
  return context;
};
