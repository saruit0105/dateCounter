import "./styles.css";
import { useState, useEffect } from "react";
import React from "react";

function Counter({
  name,
  isStep,
  step,
  handlePrevStep,
  handleNextStep,
  count,
  handleSubtract,
  handlePlus,
}) {
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <>
      {isStep ? (
        <div className="container">
          <button onClick={handlePrevStep}> - </button>
          <p>{name}: </p>
          <p>{step}</p>
          <button onClick={handleNextStep}> + </button>
        </div>
      ) : (
        <div className="container">
          <button onClick={handleSubtract}> - </button>
          <p>{name}: </p>
          <p>{count}</p>
          <button onClick={handlePlus}> + </button>
          {count >= 0 ? (
            <p>
              {count} days ago was {date.toDateString()}
            </p>
          ) : (
            <p>
              {" "}
              {count} days ago was {date.toDateString()}
            </p>
          )}
        </div>
      )}
    </>
  );
}

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  function handlePrevStep() {
    setStep((s) => s - 1);
  }
  function handleNextStep() {
    setStep((s) => s + 1);
  }
  function handleSubtract() {
    setCount((c) => c - step);
  }
  function handlePlus() {
    setCount((c) => c + step);
  }

  return (
    <div className="App">
      <Counter
        name={"Step"}
        isStep={true}
        step={step}
        setStep={setStep}
        handlePrevStep={handlePrevStep}
        handleNextStep={handleNextStep}
      />
      <Counter
        name={"Count"}
        count={count}
        setCount={setCount}
        handleSubtract={handleSubtract}
        handlePlus={handlePlus}
      />
    </div>
  );
}
