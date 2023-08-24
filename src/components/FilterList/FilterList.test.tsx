import { render, screen } from "@testing-library/react";
import FilterList from "./FilterList";

it("renders FilterList component with filter options", () => {
  // arrange
  render(<FilterList selectedFilter="abv" setSelectedFilter={() => {}} />);

  // act
  const highABV = screen.getByText("High ABV (ABV > 6%)");
  const classicRange = screen.getByText(
    "Classic Range (first brewed before 2010)"
  );
  const highAcidity = screen.getByText("High Acidity (pH < 4)");
  const all = screen.getByText("All");

  // assert
  expect(highABV).toBeInTheDocument();
  expect(classicRange).toBeInTheDocument();
  expect(highAcidity).toBeInTheDocument();
  expect(all).toBeInTheDocument();
});
