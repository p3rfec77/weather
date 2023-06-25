import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { SearchProvider } from "./context/search.context.jsx";
import { WeatherProvider } from "./context/weather.context.jsx";

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
