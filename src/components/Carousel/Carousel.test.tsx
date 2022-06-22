import React from "react";
import { render } from "@testing-library/react";
import Carousel from "./Carousel";
import "@testing-library/jest-dom";

describe("Carousel", () => {
  it("renders without crashing", () => {
    const { getByText } = render(
      <Carousel text="" dots={false}>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </Carousel>
    );
  });
});
