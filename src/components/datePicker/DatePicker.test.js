import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DatePicker from "./DatePicker";

test("'Enter date:' has to be in the document", () => {
  render(<DatePicker />);
  const enterDateText = screen.getByText(/Enter date:/);
  expect(enterDateText).toBeInTheDocument();
});
