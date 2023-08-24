import { render, screen } from "@testing-library/react";
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";

it("renders Nav component with the home button when isBeerDetailsLoaded is true", () => {
  //arrange
  render(
    <BrowserRouter>
      <Nav
        setSearchTerm={() => {}}
        selectedFilter="abv"
        setSelectedFilter={() => {}}
        isBeerDetailsLoaded={true}
        setIsBeerDetailsLoaded={() => {}}
      />
    </BrowserRouter>
  );

  // act
  const homeButton = screen.getByText("Home");

  // assert
  expect(homeButton).toBeInTheDocument();
});
