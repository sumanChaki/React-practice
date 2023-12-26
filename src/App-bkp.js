import "./App.css";
import { useState } from "react";
import BoxTesting from "./BoxTesting";

function App() {
  const initValue = 200;
  const initColor = "green";

  const [count, setCount] = useState(0);
  const [showDiv, setShowDiv] = useState(true);
  const [box, setBox] = useState(initValue);
  const [colorChange, setColorChange] = useState(initColor);

  const countIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const toggleDiv = () => {
    setShowDiv((prev) => !prev);
  };

  const toggleBox = () => {
    setBox((prev) => (prev === 200 ? prev + 100 : initValue));
  };

  const randomColor = (prev) => {
    setColorChange(
      setInterval(() => {
        prev.backgroundColor = "black";
      }, 1000)
    );
  };

  return (
    <div className="App">
      <div className="container">
        <p>Counter value is {count}</p>
        <button type="btn" className="btn" onClick={countIncrement}>
          Click here
        </button>

        {showDiv && <div className="box-modal"></div>}
        <button type="button" className="btn" onClick={toggleDiv}>
          Hit me
        </button>

        <div
          style={{ backgroundColor: "yellow", height: box, width: 200 }}
        ></div>
        <button type="button" className="btn" onClick={toggleBox}>
          Hit Box
        </button>
      </div>

      <div
        style={{ width: 200, height: 200, backgroundColor: colorChange }}
      ></div>
      <button type="button" className="btn" onClick={randomColor}>
        Check Random Color
      </button>

      <BoxTesting />
    </div>
  );
}

export default App;
