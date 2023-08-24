import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search";

it("renders Search component and updates searchTerm on input change", () => {
  // arrange
  const mockSetSearchTerm = () => {
    "buzz";
  };
  render(<Search setSearchTerm={mockSetSearchTerm} />);

  // act
  const searchInput = screen.getByLabelText("Search by Name:");

  // assert
  userEvent.type(searchInput, "BUZZ");
});
