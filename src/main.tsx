import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SearchProvider } from "./context/search.context";
import { WeatherProvider } from "./context/weather.context";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchProvider>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </SearchProvider>
  </React.StrictMode>
);
