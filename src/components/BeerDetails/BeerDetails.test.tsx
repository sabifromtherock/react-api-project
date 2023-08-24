import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import BeerDetails from "./BeerDetails";
import beers from "../../data/beers";

it("renders BeerDetails component when passed existing beer ID", () => {
  // arrange
  render(
    <MemoryRouter initialEntries={["/beer/1"]}>
      <Routes>
        <Route
          path="/beer/:id"
          element={
            <BeerDetails beers={beers} setIsBeerDetailsLoaded={() => {}} />
          }
        />
      </Routes>
    </MemoryRouter>
  );

  // act
  const name = screen.getByText("Buzz");
  const description = screen.getByText("Description:");
  const ibu = screen.getByText("IBU:");
  const ebc = screen.getByText("EBC:");
  const foodPairing = screen.getByText("Food pairing:");
  const food1 = screen.getByText("Spicy chicken tikka masala");
  const food2 = screen.getByText("Grilled chicken quesadilla");
  const food3 = screen.getByText("Caramel toffee cake");

  // assert
  expect(name).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(ibu).toBeInTheDocument();
  expect(ebc).toBeInTheDocument();
  expect(foodPairing).toBeInTheDocument();
  expect(food2).toBeInTheDocument();
  expect(food3).toBeInTheDocument();
  expect(food1).toBeInTheDocument();
});

it('renders BeerDetails component with "ID not found" message when passed not existing ID', () => {
  // arrange
  render(
    <MemoryRouter initialEntries={["/beer/399"]}>
      <Routes>
        <Route
          path="/beer/:id"
          element={
            <BeerDetails beers={beers} setIsBeerDetailsLoaded={() => {}} />
          }
        />
      </Routes>
    </MemoryRouter>
  );

  // act
  const idNotFound = screen.getByText(/ID not found/i);
  const clickOnHome = screen.getByText(/Click on Home/i);

  // assert
  expect(idNotFound).toBeInTheDocument();
  expect(clickOnHome).toBeInTheDocument();
});
