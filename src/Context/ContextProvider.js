import React, { useState } from "react";
import Context from "./Context";

const ContextProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [theme, setTheme] = useState("light");
  const [progress, setProgress] = useState(0);

  return (
    <Context.Provider
      value={{
        location,
        setLocation,
        weatherData,
        setWeatherData,
        theme,
        setTheme,
        progress,
        setProgress,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
