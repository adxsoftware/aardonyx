import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<Button label="Hello World" />);
    expect(getByText("Hello World")).toBeInTheDocument;
  });
});
