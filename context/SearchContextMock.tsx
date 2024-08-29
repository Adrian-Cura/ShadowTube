import React, { ReactNode } from "react";
import { SearchContext, SearchContextProps } from "@/context/SearchContext";

const mockContextValue: SearchContextProps = {
  searchQuery: "test query",
  setSearchQuery: jest.fn(),
};

export const SearchContextMockProvider = ({
  children,
}: {
  children: ReactNode;
}) => (
  <SearchContext.Provider value={mockContextValue}>
    {children}
  </SearchContext.Provider>
);
