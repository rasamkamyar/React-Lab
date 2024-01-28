import React from "react";
import { useState } from "react";
import Brand from "./Components/Brand";
import "./App.css";

function App() {
  const [images, setImages] = useState([
    {
      imgSrc: "car1.webp",
      isSelected: true,
    },
    {
      imgSrc: "car2.webp",
      isSelected: false,
    },
    {
      imgSrc: "car3.webp",
      isSelected: false,
    },
    {
      imgSrc: "car4.webp",
      isSelected: false,
    },
    {
      imgSrc: "car5.jpg",
      isSelected: false,
    },
  ]);

  const [mainImage, setMainImage] = useState("car1.webp");

  function selectCar(itemIndex) {
    setMainImage(images[itemIndex].imgSrc);

    images.forEach((item) => (item.isSelected = false));
    images[itemIndex].isSelected = true;
  }

  return (
    <>
      <div className="mainImage">
        <img src={`/images/${mainImage}`} className="mainImage_image" />
      </div>
      <Brand imageData={images} handleClick={selectCar} />
    </>
  );
}

export default App;
