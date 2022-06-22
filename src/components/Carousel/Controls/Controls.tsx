import React from "react";
import "./controls.module.scss";

const Controls = ({ prevSlide, nextSlide }) => {
  return (
    <div className="controls">
      <button onClick={() => prevSlide()}>left</button>
      <button onClick={() => nextSlide()}>right</button>
    </div>
  );
};

export default Controls;
