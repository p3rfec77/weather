import { AsyncPaginate } from "react-select-async-paginate";
import { useContext } from "react";

import { GEO_OPTIONS, GEO_URL } from "../../API's/geo.api";

import { SearchCotnext } from "../../context/search.context";

import "./search.styles.css";

const Search = () => {
  const { search, setSearch } = useContext(SearchCotnext);
  const handleOnChange = (searchData) => {
    setSearch(searchData);
  };

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`,
        GEO_OPTIONS
      );
      const result = await response.json();
      return {
        options: result.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.city}, ${city.countryCode}`,
          };
        }),
      };
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <AsyncPaginate
        className="select"
        placeholder="Search for City"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default Search;
