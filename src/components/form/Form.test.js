import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Form from "./Form";

test("Button has to have 'Enter' name in it", () => {
  render(<Form />);
  const enterBtn = screen.getByText("Enter");
  expect(enterBtn).toBeInTheDocument();
});

test("Label has to have 'Enter the number:' name in it", () => {
  render(<Form />);
  const enterLabel = screen.getByText("Enter the number:");
  expect(enterLabel).toBeInTheDocument();
});
