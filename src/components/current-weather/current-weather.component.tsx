import { Fragment, useContext } from "react";

import { WeatherContext } from "../../context/weather.context";
import { SearchCotnext } from "../../context/search.context";

import "./current-weather.styles.css";

const CurrentWeather = (): React.JSX.Element => {
  const { search } = useContext(SearchCotnext);
  const {
    temperature,
    description,
    icon,
    feelsLike,
    wind,
    pressure,
    humidity,
  } = useContext(WeatherContext);

  return (
    <Fragment>
      {search && (
        <div className="current-weather__container">
          <div className="current-weather__main">
            <span className="current-weather__location">{search.label}</span>
            <span className="current-weather__description">{description}</span>
            <span className="current-weather__temperature">
              {temperature}&#176;C
            </span>
          </div>
          <div className="current-weather__aside">
            <img
              className="current-weather__icon"
              src={icon}
              alt={description}
            />
            <div className="current-weather__details">
              <span className="details__titile">Details:</span>
              <div className="detail__wrapper">
                <span className="detail__title">Feels like</span>
                <span className="detail__value">{feelsLike}&#176;c</span>
              </div>

              <div className="detail__wrapper">
                <span className="detail__title">Wind</span>
                <span className="detail__value">{wind} m/s</span>
              </div>

              <div className="detail__wrapper">
                <span className="detail__title">Humidity</span>
                <span className="detail__value">{humidity}%</span>
              </div>

              <div className="detail__wrapper">
                <span className="detail__title">Pressure</span>
                <span className="detail__value">{pressure} hPa</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CurrentWeather;
