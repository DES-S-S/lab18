import { useState, useEffect } from 'react';
import axios from 'axios';

const MyCity = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const city = "Kyiv";
  const API_KEY = "7da05d915f3c4bbdbc712032261405"; 

  useEffect(() => {
    axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
      .then(res => {
        setWeather(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Помилка завантаження даних API');
        setLoading(false);
      });
  }, []);

  return (
    <section className="page-section">
      <h1 className="title-strict">{city.toUpperCase()}</h1>
      <p className="border-strict p-15">Київ — столиця України.</p>
      
      <div className="weather-container border-strict mt-20">
        <h2>Поточна погода</h2>
        {loading && <p>Завантаження...</p>}
        {error && <p className="error-text">{error}</p>}
        {weather && (
          <div className="weather-grid">
            <div className="weather-item border-strict">Температура: <strong>{weather.current.temp_c}°C</strong></div>
            <div className="weather-item border-strict">Стан: <strong>{weather.current.condition.text}</strong></div>
            <div className="weather-item border-strict">Вітер: <strong>{weather.current.wind_kph} км/год</strong></div>
            <div className="weather-item border-strict">Координати: <strong>{weather.location.lat}, {weather.location.lon}</strong></div>
          </div>
        )}
      </div>
    </section>
  );
};
export default MyCity;