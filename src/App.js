import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);
  // console.log(date.toDateString());

  const increase = () => setCount((current) => current + step);
  const decrease = () => setCount((current) => current - step);
  return (
    <div className="App">
      <div>
        <button onClick={decrease}>-</button>
        <span>Count: {count} </span>
        <button onClick={increase}>+</button>
      </div>
      <div>
        <button onClick={() => setStep((current) => current - 1)}>-</button>
        <span>Step: {step} </span>
        <button onClick={() => setStep((current) => current + 1)}>+</button>
      </div>

      <p>
        {count === 0
          ? "today is"
          : count > 0
          ? `${count} days from today`
          : `${Math.abs(count)} days was`}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default App;
