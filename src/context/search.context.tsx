import { createContext, useState } from "react";

interface ISearchContext {
  search: null;
  setSearch: React.Dispatch<any>;
}

export const SearchCotnext = createContext({
  search: null,
  setSearch: null,
});

export const SearchProvider = ({ children }): React.JSX.Element => {
  const [search, setSearch] = useState(null);

  const value: ISearchContext = { search, setSearch };

  return (
    <SearchCotnext.Provider value={value}>{children}</SearchCotnext.Provider>
  );
};
