import { useState } from "react";
import WeatherCard from "./components/WeatherCard.jsx";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (!city) return;

    // Mengirimkan permintaan ke backend yang mengakses OpenWeather API
    const url = `http://localhost:5000/weather?city=${city}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod !== 200) {
        alert(data.message);
        setWeather(null);
      } else {
        setWeather(data);
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      alert("Gagal mengambil data cuaca.");
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="app-title">Weather App</h1>

        <div className="search">
          <input
            type="text"
            placeholder="Masukkan nama kota..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="search-input"
          />
          <button onClick={getWeather} className="search-button">
            Cari
          </button>
        </div>

        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;
