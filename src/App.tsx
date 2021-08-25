import React, { useState } from "react";
import "./App.scss";
import BinaryInput from "./binaryInput";

const converter = (num: string): number => {
  let convertedNumber = 0;
  for (let i = 0; i < num.length; i++) {
    convertedNumber += Number(num[i]) * Math.pow(2, num.length - (i + 1));
  }
  console.log(convertedNumber);
  return convertedNumber;
};

function App() {
  const [binaryNumber, setBinaryNumber] = useState("");
  const handleSetBinaryNumber = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    return setBinaryNumber(event.target.value);
  };

  return (
    <div>
      <BinaryInput callback={handleSetBinaryNumber} value={binaryNumber} />
    </div>
  );
}

export default App;
