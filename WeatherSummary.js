import React from 'react';

function WeatherSummary({ weatherData }) {
  if (!weatherData) {
    return <p>Loading weather data...</p>;
  }

  const { main, temp, feels_like, dt, weather } = weatherData;
  const date = new Date(dt * 1000).toLocaleDateString();

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Weather Summary</h2>
      <p style={styles.date}>{date}</p>
      <p style={styles.temp}>Temperature: {temp}°C</p>
      <p style={styles.feelsLike}>Feels Like: {feels_like}°C</p>
      <p style={styles.condition}>Condition: {weather[0].description}</p>
      <p style={styles.humidity}>Humidity: {main.humidity}%</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  date: {
    fontSize: '18px',
    color: '#666',
  },
  temp: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  feelsLike: {
    fontSize: '18px',
    color: '#888',
  },
  condition: {
    fontSize: '18px',
    textTransform: 'capitalize',
  },
  humidity: {
    fontSize: '18px',
    color: '#888',
  },
};

export default WeatherSummary;
