import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";
import { SearchContextMockProvider } from "@/context/SearchContextMock";

it("renders home page", () => {
  render(
    <SearchContextMockProvider>
      <HomePage />
    </SearchContextMockProvider>
  );

  expect(screen.getByText("Videos")).toBeInTheDocument();

});
