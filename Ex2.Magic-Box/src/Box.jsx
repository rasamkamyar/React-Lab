import React, { useState } from "react";
import "./App.css";

function Box() {
  const [number, setNumber] = useState(0);
  const [randomBg, setRandomBg] = useState("rgb(1,1,1)");

  function handleBox() {
    const randomNumber = Math.floor(Math.random() * 100);
    setNumber(randomNumber);

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    setRandomBg(`rgba(${red},${green}, ${blue})`);
  }

  return (
    <div
      className="container"
      onClick={handleBox}
      style={{ backgroundColor: randomBg }}
    >
      <h1>{number}</h1>
    </div>
  );
}

export default Box;
