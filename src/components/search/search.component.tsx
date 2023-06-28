import { AsyncPaginate } from "react-select-async-paginate";
import { useContext } from "react";

import { GEO_OPTIONS, GEO_URL } from "../../API's/geo.api";

import { SearchCotnext } from "../../context/search.context";

import "./search.styles.css";

interface ISearchData {
  value: string;
  label: string;
}

interface ICity {
  city: string;
  country: string;
  countryCode: string;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  population: number;
  region: string;
  regionCode: string;
  regionWdId: string;
  type: string;
  wikiDataId: string;
}

interface IResult {
  data: [];
  links: [];
  metadata: {
    currentOffset: number;
    totalCount: number;
  };
}

const Search = (): React.JSX.Element => {
  const { search, setSearch } = useContext(SearchCotnext);
  const handleOnChange = (searchData: ISearchData): void => {
    setSearch(searchData);
  };

  const loadOptions = async (inputValue: string) => {
    const url = new URL(GEO_URL);
    const params: URLSearchParams = url.searchParams;

    params.set("minPopulation", "10000");
    params.set("namePrefix", inputValue);

    const SEARCH_URL: string = url.toString();
    try {
      const response: Response = await fetch(SEARCH_URL, GEO_OPTIONS);
      const result: IResult = await response.json();
      return {
        options: result.data.map((city: ICity) => {
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
    <AsyncPaginate
      className="select"
      placeholder="Search for City"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
