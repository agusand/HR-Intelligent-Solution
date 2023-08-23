import { createContext, useContext, useState } from "react";

import SearchServiceValue from "./SearchServiceValue";

import GenericProps from "types/GenericProps";

const SearchService = createContext<SearchServiceValue | null>(null);
const HIGHER_LIMIT = 65;

export const useSearchService = () => {
  return useContext(SearchService) as SearchServiceValue;
};

export function SearchServiceProvider({ children }: GenericProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isHigher, setIsHigher] = useState<boolean>(false);

  return (
    <SearchService.Provider
      value={{
        HIGHER_LIMIT,
        inputValue,
        setInputValue,
        isDisabled,
        setIsDisabled,
        isHigher,
        setIsHigher,
      }}
    >
      {children}
    </SearchService.Provider>
  );
}
