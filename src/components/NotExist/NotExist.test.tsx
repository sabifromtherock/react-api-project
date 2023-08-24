import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotExist from "./NotExist";

it('renders NotExist component with "Content not found" message', () => {
  // arrange
  render(
    <BrowserRouter>
      <NotExist />
    </BrowserRouter>
  );

  // act
  const notFound = screen.getByText(/Content not found/i);
  const clickMe = screen.getByText(/Click Me!/i);

  // assert
  expect(notFound).toBeInTheDocument();
  expect(clickMe).toBeInTheDocument();
});

it("renders NotExist component with a link to the home page", () => {
  // arrange
  render(
    <BrowserRouter>
      <NotExist />
    </BrowserRouter>
  );

  // act
  const link = screen.getByRole("link");

  // assert
  expect(link).toHaveAttribute("href", "/");
  expect(link).toHaveTextContent("Click Me!");
});
