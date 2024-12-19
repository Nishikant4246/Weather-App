import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "5f23adc9b58fad8440c1049f91dffe34";

    let getWeatherInfo = async () => {
        try {
            // Dynamically construct the URL with city and API key
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            
            if (!response.ok) {
                throw new Error(`HTTP Error! status: ${response.status}`);
            }

            // Parse JSON response
            let jsonResponse = await response.json();
            
            // Check if the city exists in the response
            if (jsonResponse.cod !== 200) {
                throw new Error("City not found");
            }

            // Create the result object using jsonResponse
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };

            return result;
        } catch (err) {
            setError("No such place exists in our API. Try a different One.");
            console.error("Error fetching weather data:", err.message);
            return null;
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            if (city.trim() === "") {
                console.error("City name cannot be empty");
                return;
            }
            
            let newInfo = await getWeatherInfo();
            
            if (newInfo) {
                setCity("");  // Clear the input field after submitting
                setError(false);  // Reset error state
                updateInfo(newInfo);  // Pass the data to parent component
            }
        } catch (err) {
            setError("An unexpected error occurred. Please try again.");
        }
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="contained" type="submit">Search</Button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}
