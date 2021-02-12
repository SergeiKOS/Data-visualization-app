import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ResetBtn from "./ResetBtn";

test("Button has to have 'Reset graph' name in it", () => {
  render(<ResetBtn />);
  const resetGraphBtn = screen.getByText("Reset graph");
  expect(resetGraphBtn).toBeInTheDocument();
});
