import React, { useState } from "react";

export default function App() {
  const [degC, setDegC] = useState(0);
  function handleChange(e) {
    setDegC(e.target.value);
  }
  function convertir(degC) {
    return (degC * 9) / 5 + 32;
  }
  function isBout(degC) {
    return degC >= 100 ? "L'eau bout" : "L'eau nebout pas";
  }
  console.log(degC);
  return (
    <div>
      <label>
        Temperature (en Celsus)
        <br />
        <input type="text" onChange={handleChange} value={degC} />
      </label>
      <br />
      <label>
        Temperature (en Fahrenhei)
        <br />
        <input type="text" value={convertir(degC)} />
      </label>
      <p>{isBout(degC)}</p>
    </div>
  );
}
