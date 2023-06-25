import { useContext, createContext, useState, useEffect } from "react";

import { SearchCotnext } from "./search.context";

export const WeatherContext = createContext({
  temperature: "",
  description: "",
  icon: "",
  feelsLike: "",
  wind: "",
  humidity: "",
  preassure: "",
});

export const WeatherProvider = ({ children }) => {
  const { search } = useContext(SearchCotnext);
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const [preassure, setPreassure] = useState("");

  useEffect(() => {
    if (search) {
      const [lat, lon] = search.value.split(" ");

      const getWeather = async () => {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=Metric&id=524901&appid=d67bbc6651aa1de7c3ecf3f5adabf4e0`
        );
        const { main, wind, weather } = await response.json();

        setTemperature(Math.round(main.temp));
        setFeelsLike(Math.round(main.feels_like));
        setWind(Math.round(wind.speed));
        setHumidity(main.humidity);
        setPreassure(main.preassure);

        const [weatherData] = weather;
        setDescription(weatherData.description);
        setIcon(`icons/${weatherData.icon}.png`);
      };

      getWeather();
    }
  }, [search]);

  const value = {
    temperature,
    description,
    icon,
    feelsLike,
    wind,
    humidity,
    preassure,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
