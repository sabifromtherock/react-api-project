import { render, screen } from "@testing-library/react";
import BeerCard from "./BeerCard";
import beers from "../../data/beers";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

it("should render the BeerCard", () => {
  // arrange
  render(
    <BrowserRouter>
      <BeerCard beer={beers[0]} variant="" />
    </BrowserRouter>
  );

  // act
  const name = screen.getByText("Name:");
  const firstBrewed = screen.getByText("First Brewed:");
  const abv = screen.getByText("ABV:");
  const ph = screen.getByText("pH:");

  // assert
  expect(name).toBeInTheDocument();
  expect(firstBrewed).toBeInTheDocument();
  expect(abv).toBeInTheDocument();
  expect(ph).toBeInTheDocument();
});

it("should render url when BeerCard is clicked ", async () => {
  // arrange
  render(
    <BrowserRouter>
      <BeerCard beer={beers[0]} variant="" />
    </BrowserRouter>
  );

  // act
  const beerCard = screen.getByRole("link");
  await userEvent.click(beerCard);

  //assert
  expect(beerCard).toHaveAttribute("href", `/beer/${beers[0].id}`);
});
