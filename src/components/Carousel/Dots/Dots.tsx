import React from "react";
import classnames from "classnames";
import "./dots.module.scss";

const Dots = ({ current, length }) => {
  return (
    <div className="dots">
      {new Array(length).fill(".").map((dot, i) => {
        return (
          <div className={classnames(`dot ${current === i ? "current" : ""}`)}>
            {dot}
          </div>
        );
      })}
    </div>
  );
};

export default Dots;
