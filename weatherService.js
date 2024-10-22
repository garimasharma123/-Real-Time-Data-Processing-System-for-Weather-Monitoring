
import axios from 'axios';

const API_KEY = '5775a9744e093eb092e147e3f7b74498'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'; 

export const getWeather = async (city) => {
    try {
        console.log(`Fetching weather data for city: ${city}`); 
        const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        
        if (error.response) {
            console.error('Error fetching the weather data:', error.response.data);
            throw new Error(error.response.data.message || 'Failed to fetch weather data.');
        } else if (error.request) {
            console.error('No response received:', error.request);
            throw new Error('Failed to fetch weather data. Please check your internet connection.');
        } else {
            console.error('Error setting up the request:', error.message);
            throw new Error('An unexpected error occurred. Please try again.');
        }
    }
};
