import React, { useState } from "react";
import classnames from "classnames";

import Controls from "./Controls";
import Text from "./Text";
import Dots from "./Dots";

import "./carousel.module.scss";

export interface CarouselProps {
  text: string;
  dots: boolean;
  className: string;
  children: React.ReactNode[];
}

const Carousel = ({ children, text, dots, ...props }) => {
  const [current, setCurrent] = useState(0);
  const [length] = useState(children.length);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current < length - 1 ? current + 1 : 0);
  };

  return (
    <div {...props}>
      {text && <Text text={text} />}
      <Controls prevSlide={prevSlide} nextSlide={nextSlide} />
      <div className="slides">
        {children.map((slide, i) => {
          return (
            <div className={current === i ? "active" : "slide"}>{slide}</div>
          );
        })}
      </div>
      {dots && <Dots length={length} current={current} />}
    </div>
  );
};

export default Carousel;
