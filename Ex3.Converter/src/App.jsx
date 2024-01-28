

import { useState } from "react";
import conversionFactors from "./conversionFactors";
import "./App.css";

function App() {

  const [inputValue, setInputValue] = useState();
  const [fromInput, setFromInput] = useState("centimeter");
  const [toInput, setToInput] = useState("meter");
  const [result, setResult] = useState(0);

  const isDisabled = fromInput === toInput;

  function convertClick() {
    if (!isDisabled) {
      const convertedResult =
        inputValue * conversionFactors[fromInput][toInput];
      setResult(convertedResult.toFixed(4));
    }
  }

  return (
    <div className="container">
      <div className="innerContainer">
        <div className="formInput">
          <label>Amount</label>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => {
              setInputValue(parseFloat(e.target.value));
            }}
            placeholder="Write a number"
            className="input"
          />
        </div>
        <div className="formSelect">
          <div className="formSelect_label">
            <label>From</label>
            <select
              value={fromInput}
              onChange={(e) => setFromInput(e.target.value)}
              className="formSelect_label_select"
            >
              {Object.keys(conversionFactors).map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
          <div className="formSelect_label">
            <label>To</label>
            <select
              value={toInput}
              onChange={(e) => setToInput(e.target.value)}
              className="formSelect_label_select"
            >
              {Object.keys(conversionFactors).map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
          <button
            className="formSelect_button"
            onClick={convertClick}
            disabled={isDisabled}
          >
            Convert
          </button>
        </div>
        <p>Result is: {result}</p>
      </div>
    </div>
  );
}

export default App;
