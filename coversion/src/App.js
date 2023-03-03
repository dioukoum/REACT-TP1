import React, { useState } from "react";
import "./App.css";
import boilingWater from "./assets/boilingWater.jpg";
import noBoilingWater from "./assets/noBoilingWater.jpg";

export default function App() {
  const [degC, setDegC] = useState(0);
  function handleChange(e) {
    setDegC(e.target.value);
  }
  function convertir(degC) {
    return (degC * 9) / 5 + 32;
  }
  function isBout(degC) {
    return degC >= 100 ? "L'eau bout" : "L'eau ne bout pas";
  }
  function imgs() {
    if (degC >= 100) {
      return boilingWater;
    } else {
      return noBoilingWater;
    }
  }
  const divColor = {};
  if (degC < 100) {
    divColor.color = "skyblue";
  } else {
    divColor.color = "red";
  }
  console.log(degC);
  return (
    <div>
      <label>
        Temperature (en Celsus)
        <br />
        <input
          type="text"
          onChange={handleChange}
          value={degC}
          style={divColor}
        />
      </label>
      <br />
      <label>
        Temperature (en Fahrenheit)
        <br />
        <input type="text" value={convertir(degC)} style={divColor} />
      </label>
      <p>{isBout(degC)}</p>
      <img src={imgs()} alt="bout" />
    </div>
  );
}
