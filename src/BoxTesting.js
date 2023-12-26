import React, { useEffect, useState } from "react";

const BoxTesting = () => {
  const customBox = 200;
  const bgColor = "green";
  const initBg = "black";
  const maxCount = 5;
  const [click, setClick] = useState(0);

  const [count, setCount] = useState(0);
  const [boxWidth, setBoxWidth] = useState(customBox);
  const [boxbg, setBoxColor] = useState(bgColor);

  const countIncrement = () => {
    // setCount((prev) => (prev === 5 && prev <= 6 ? "Maximum limit" : prev + 1));
    // setClick(prev => prev + 1)
    // setCount((prev) => (prev < maxCount ? prev + 1 : maxCount));
    setCount((prev) => prev + 1);
  };

  const countDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const widthIncrement = () => {
    setBoxWidth((prev) => (prev === customBox ? prev + 100 : customBox));
    setBoxColor(value => value === bgColor ? value = "red" : bgColor);
  };

const [bgUpdate, setBgUpdate] = useState(initBg);
const [bginterval, setBgInterval] = useState(null);

const bgChangeHandler = () => {
   const colorInterval = setInterval(() => {
      setBgUpdate((prev) => (prev == initBg ? "Purple" : initBg));
    }, 2000);
    setBgInterval(colorInterval);
}

const stopBgChangeHandler = () => {
  clearInterval(bginterval);
  setBgUpdate(initBg);
}




  return (
    <>
      <div className="container">
        <div className="counter-value-increment">
          {/* <p>Count Value is {click <= maxCount ? count : "Maximum Limit"}</p> */}
          <p>Count Value is {count <= maxCount ? count : "Maximum Limit"}</p>

          <div className="counter-btn-group">
            <button type="button" className="btn" onClick={countIncrement}>
              Count Increment
            </button>

            <button type="button" className="btn" onClick={countDecrement}>
              Count Decrement
            </button>
          </div>
        </div>

        <div className="counter-value-increment">
          <h3>Toggle box width and backgroundColor</h3>
          <div
            style={{
              backgroundColor: boxbg,
              height: 200,
              width: boxWidth,
              marginBottom: 20,
            }}
          ></div>

          <button type="button" className="btn" onClick={widthIncrement}>
            Click here
          </button>
        </div>

        <div className="counter-value-increment">
          <h3>Background change</h3>
          {/* <div
            style={{ height: 200, width: 200, backgroundColor: bgChange, marginBottom: 20 }}
          ></div>
          <button type="button" className="btn" onClick={bgChangeHandler}>
            Click Here
          </button> */}
          <div
            style={{ backgroundColor: bgUpdate, width: 200, height: 200 }}
          ></div>
          <button
            type="button"
            className="btn"
            style={{ marginRight: 20 }}
            onClick={bgChangeHandler}
          >
            Click Here
          </button>
          <button type="button" className="btn" onClick={stopBgChangeHandler}>
            Stop Bg
          </button>
        </div>
      </div>
    </>
  );
};

export default BoxTesting;
