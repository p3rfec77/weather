import { createContext, useState } from "react";

export const SearchCotnext = createContext({
  search: null,
  setSearch: () => null,
});

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState(null);

  const value = { search, setSearch };

  return (
    <SearchCotnext.Provider value={value}>{children}</SearchCotnext.Provider>
  );
};
