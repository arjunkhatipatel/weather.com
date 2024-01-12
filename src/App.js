import Context from "./Context/Context";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import "./App.css";
import { useContext } from "react";
import LoadingBar from "react-top-loading-bar";
import Footer from "./components/Footer";

function App() {
  const { location, setLocation } = useContext(Context);
  const { weatherData, setWeatherData } = useContext(Context);
  const { theme, setTheme } = useContext(Context);
  const { progress, setProgress } = useContext(Context);

  //API Details
  const API_KEY = "aa8ce84fd19d4b11b5462139231506";
  const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=14&aqi=no&alerts=no`;

  const commonStyle = {
    color: theme === "light" ? "black" : "white",
    backgroundColor: theme === "light" ? "#fefefe" : "#666666",
  };

  const toggleMode = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "#7f7f7f";
      document.body.style.color = "white";
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "#a6e7ff";
      document.body.style.color = "#36454F";
    }
  };

  //Fetching data from API
  const fetchWeatherData = async () => {
    try {
      setProgress(30);
      const response = await fetch(API_URL);
      setProgress(60);
      const data = await response.json();
      setProgress(70);
      if (data.error) {
        console.log(data.error.message);
        alert("Error fetching data: " + data.error.message);
      } else {
        setWeatherData(data);
      }
      setLocation("");
      setProgress(100);
    } catch (error) {
      alert("Unable to fetch data: " + error);
    }
  };

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        shadow={true}
        height={3}
        waitingTime={700}
      />
      <Navbar toggleMode={toggleMode} />
      <Search fetchWeatherData={fetchWeatherData} />
      {weatherData && <CurrentWeather style={commonStyle} />}
      {weatherData && <Forecast style={commonStyle} />}
      <Footer />
    </>
  );
}

export default App;
