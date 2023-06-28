import { useContext, createContext, useState, useEffect } from "react";

import { SearchCotnext } from "./search.context";

interface IWeatherContext {
  temperature: number;
  description: string;
  icon: string;
  feelsLike: number;
  wind: number;
  humidity: number;
  pressure: number;
}

export const WeatherContext = createContext({
  temperature: 0,
  description: "",
  icon: "",
  feelsLike: 0,
  wind: 0,
  humidity: 0,
  pressure: 0,
});

export const WeatherProvider = ({ children }) => {
  const { search } = useContext(SearchCotnext);
  const [temperature, setTemperature] = useState(0);
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [feelsLike, setFeelsLike] = useState(0);
  const [wind, setWind] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [pressure, setPressure] = useState(0);

  useEffect(() => {
    if (search) {
      const [lat, lon]: string = search.value.split(" ");

      const url = new URL(
        "https://api.openweathermap.org/data/2.5/weather?id=524901&appid=d67bbc6651aa1de7c3ecf3f5adabf4e0"
      );
      const params: URLSearchParams = url.searchParams;

      params.set("units", "Metric");
      params.set("lat", lat);
      params.set("lon", lon);
      const WEATHER_URL: string = url.toString();

      const getWeather = async (): Promise<void> => {
        const response: Response = await fetch(WEATHER_URL);
        const { main, wind, weather } = await response.json();

        setTemperature(Math.round(main.temp));
        setFeelsLike(Math.round(main.feels_like));
        setWind(Math.round(wind.speed));
        setHumidity(main.humidity);
        setPressure(main.pressure);

        const [weatherData] = weather;
        setDescription(weatherData.description);
        setIcon(`icons/${weatherData.icon}.png`);
      };

      getWeather();
    }
  }, [search]);

  const value: IWeatherContext = {
    temperature,
    description,
    icon,
    feelsLike,
    wind,
    humidity,
    pressure,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
