import React, {useState} from 'react';
import './App.css';
const APIKEY = "eb3e7d4533dc730637ad71bb23249674"
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
function App() {
  const[city, setCity] = useState("");
  const [result, setResult] = useState();

  const getWeather = async(event) => {

    event.preventDefault();
    if(city) {

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`
      )
    
    console.log(res);

    const container = await res.json();

    setResult( container );
  }
}


  return (


    <div className="App">
      <h1>Wetter in der Stadt</h1>
      <form onSubmit={getWeather}>
        <label>Stadt</label>
        <input value={city} onChange={(e) => setCity(e.target.value)}></input>
        <button type="submit">Wetter holen</button>
      </form>
      {result.main && (
        <div>
          <p>Temperatur: {result && result.main.temp}</p>
          <p>Maximale Temperatur: {result && result.main.temp_max}</p>
        </div>
      )}
    </div>
  );
}

export default App;
