import { render, screen } from "@testing-library/react";
import Pagination from "./Pagination";

it("renders Pagination component", () => {
  // arrange
  const currentPage = 3;
  const lastPage = 5;
  render(
    <Pagination
      currentPage={currentPage}
      setCurrentPage={() => {}}
      lastPage={lastPage}
    />
  );

  // act
  const page = screen.getByText(`Page ${currentPage}`);
  const leftArrow = screen.getByAltText("left arrow");
  const rightArrow = screen.getByAltText("right arrow");
  const leftDoubleArrow = screen.getByAltText("left double arrow");
  const rightDoubleArrow = screen.getByAltText("right double arrow");

  // assert
  expect(page).toBeInTheDocument();
  expect(leftArrow).toBeInTheDocument();
  expect(leftDoubleArrow).toBeInTheDocument();
  expect(rightArrow).toBeInTheDocument();
  expect(rightDoubleArrow).toBeInTheDocument();
});
