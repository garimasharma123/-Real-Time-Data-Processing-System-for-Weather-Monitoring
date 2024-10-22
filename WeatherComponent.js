
import React, { useState } from 'react';
import { getWeather } from '../utils/weatherService';
import './WeatherComponent.css'; 

const WeatherComponent = () => {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState(''); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGetWeather = async () => {
        setLoading(true); 
        setError(''); 
        try {
            const data = await getWeather(city);
            setWeather(data);
        } catch (err) {
            setError('Failed to fetch weather data. Please try again.');
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div className="weather-container">
            <h1>Weather Information</h1>
            {loading && <p>Loading...</p>}
            {error && <p className="error-message">{error}</p>}
            {weather && !loading && (
                <div className="weather-info">
                    <h2>{weather.name}</h2>
                    <p>Temperature: {weather.main.temp} °C</p>
                    <p>Weather: {weather.weather[0].description}</p>
                </div>
            )}
            <div className="input-container">
                <input 
                    type="text" 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)} 
                    placeholder="Enter city" 
                />
                <button onClick={handleGetWeather}>Get Weather</button>
            </div>
        </div>
    );
};

export default WeatherComponent;
