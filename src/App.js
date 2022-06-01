import DataView from './components/DataView'
import CityForm from './components/CityForm'
import './App.css';
import { useEffect, useState, useCallback } from 'react';

function App() {

  const key = '4e6fb3b33d4a7a69591cca21c7882ee9'
  
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('Tartu')


  const fetchDataHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const weatherData = await response.json();

      const transformedData = {
          description: weatherData.weather[0].description,
          temp: Math.round(parseFloat(weatherData.main.temp)-273.15),
          feelsLike: Math.round(parseFloat(weatherData.main.feels_like)-273.15),
          tempMin: Math.round(parseFloat(weatherData.main.temp_min)-273.15),
          tempMax: Math.round(parseFloat(weatherData.main.temp_max)-273.15),
          wind: weatherData.wind.speed,
      }
      setData(transformedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [city]);

  useEffect(() => {
    fetchDataHandler()
  }, [fetchDataHandler])

  const changeCityHandler = (changeCity) => {
    setCity(changeCity)
    fetchDataHandler()
  }

  return (
    <div className="App">
      <div className='App-header'>
        {!isLoading && <DataView data={data} city={city}/>}
        {!isLoading && <CityForm onChangeCity={changeCityHandler}/>}
        {error}
      </div>  
    </div>
  );
}

export default App;

// :D