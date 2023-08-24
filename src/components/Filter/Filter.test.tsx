import { render, screen } from "@testing-library/react";
import Filter from "./Filter";

it("renders Filter component ", () => {
  // arrange
  const label = "Test Filter";
  const selected = true;

  render(<Filter label={label} selected={selected} onChange={() => {}} />);

  // act
  const filterLabel = screen.getByText(label);
  const filterInput = screen.getByRole("radio");

  // assert
  expect(filterLabel).toBeInTheDocument();
  expect(filterInput).toBeChecked();
});
