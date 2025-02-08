"use client";

import { useState, useEffect } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const formatNumber = (num: string) => {
    if (isNaN(Number(num))) return num;
    return new Intl.NumberFormat().format(Number(num));
  };

  const formatInput = (input: string) => {
    return input.split(/([+\-*/])/).map(formatNumber).join('');
  };

  const handleButtonClick = (value: string) => {
    if (value === "RESET") {
      setInput("");
      setResult("");
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        const evalResult = eval(input).toString();
        setResult(formatNumber(evalResult));
      } catch {
        setResult("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleButtonClick("=");
    } else if (e.key === "Backspace") {
      handleButtonClick("DEL");
    } else if ("0123456789+-*/.".includes(e.key)) {
      handleButtonClick(e.key);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [input]);

  return (
    <div className="grid gap-8 w-full grid-rows-[auto 1fr] calculator mt-8 mb-6">
      <div className="display grid justify-end text-right rounded-xl h-[88px] lh:h-[128px] transition duration-300 p-5 relative">
        <div className="transition duration-300 input text-color text-md absolute top-2 right-5 opacity-50">{formatInput(input)}</div>
        <div className="transition duration-300 result text-color font-bold text-4xl mt-3">{result}</div>
      </div>
      <div className="buttons transition duration-300 rounded-xl grid grid-cols-4 gap-6 py-8 px-[30px]">
        {["7", "8", "9", "DEL", "4", "5", "6", "+", "1", "2", "3", "-", ".", "0", "/", "x", "RESET", "="].map((btn) => (
          <button
            className={`button lg:min-w-[100px] grid place-content-center leading-6 h-16 rounded-[10px] text-[40px] font-bold transition duration-300 ${
              btn === "DEL" ? "del-button" : btn === "RESET" ? "reset-button" : btn === "=" ? "equals-button" : ""
            }`}
            key={btn}
            onClick={() => handleButtonClick(btn)}>
              <div className="mt-1">
                {btn}
              </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
