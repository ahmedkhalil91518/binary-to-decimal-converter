import React, { useState } from "react";
import "./App.scss";
import BinaryInput from "./BinaryInput";
import BinaryOutput from "./BinaryOutput";

const converter = (num: string): string => {
  if (/^[0-1]*$/.test(num)) {
    let convertedNumber = 0;
    for (let i = 0; i < num.length; i++) {
      convertedNumber += Number(num[i]) * Math.pow(2, num.length - (i + 1));
    }
    if (isNaN(convertedNumber)) {
      return "please enter a valid binary number";
    } else {
      return String(convertedNumber);
    }
  } else {
    return "please enter a valid binary number";
  }
};

function App() {
  const [binaryNumber, setBinaryNumber] = useState("");
  const handleSetBinaryNumber = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    return setBinaryNumber(event.target.value);
  };

  return (
    <div className="d-flex align-items-center justify-content-center flex-column wrapper">
      <h1>Binary Converter</h1>
      <BinaryInput callback={handleSetBinaryNumber} />
      <BinaryOutput value={converter(binaryNumber)} />
    </div>
  );
}

export default App;
