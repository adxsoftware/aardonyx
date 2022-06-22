import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Carousel from "./Carousel";
import "./test.module.scss";

export default {
  title: "Aardonyx/Carousel",
  component: Carousel
} as ComponentMeta<typeof Carousel>;

const data = [
  <div style={{ border: "5px solid red", display: "inline-block" }}>
    <img src="https://placekitten.com/300/300" />
  </div>,
  <div
    style={{
      border: "5px solid  yellow",
      display: "inline-block"
    }}
  >
    <img src="https://placekitten.com/300/300" />
  </div>,
  <div style={{ border: "5px solid blue", display: "inline-block" }}>
    <img src="https://placekitten.com/300/300" />
  </div>
];

const Template: ComponentStory<typeof Carousel> = () => (
  <Carousel dots text="Default Styles">
    {data.map(slide => (
      <div>{slide}</div>
    ))}
  </Carousel>
);

export const Basic = Template.bind({});
