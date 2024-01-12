import Context from "../Context/Context";
import "./Search.css";
import { useContext, useEffect, useState } from "react";

export default function Search({ fetchWeatherData }) {
  const { location, setLocation } = useContext(Context);
  const { setProgress } = useContext(Context);

  const [shouldFetch, setShouldFetch] = useState(false);

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      setProgress(5);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setProgress(10);
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude},${longitude}`);
          setShouldFetch(true);
          setProgress(15);
        },
        (error) => {
          setProgress(100);
          alert("Please, allow us location permission.");
        }
      );
    } else {
      setProgress(100);
      alert("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    if (location && shouldFetch) {
      fetchWeatherData();
      setShouldFetch(false);
    } else if (shouldFetch) {
      alert("Give a location");
      setShouldFetch(false);
    }
  }, [location, shouldFetch, fetchWeatherData, setShouldFetch]);

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Enter location"
        id="location-input"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      />
      <div className="button">
        <button
          className="search-button search-search"
          htmlFor="location-input"
          onClick={(e) => {
            setShouldFetch(true);
          }}
        >
          Search
        </button>
        <button
          className="search-button search-geolocation"
          onClick={handleGeolocation}
        >
          Location
        </button>
      </div>
    </div>
  );
}
