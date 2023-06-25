import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather.component";
import Search from "./components/search/search.component";

const App = () => {
  return (
    <div className="container">
      <Search />
      <CurrentWeather />
    </div>
  );
};

export default App;
